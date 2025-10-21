import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

export type Settings = {
  textSizePx: number
  darkMode: boolean
}

export type UserProfile = {
  name: string
  avatarUrl?: string
  school?: string
  teacher?: string
  classroom?: string
}

type AppState = {
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  toggleDrawer: () => void
  settings: Settings
  updateSettings: (next: Partial<Settings>) => void
  userProfile: UserProfile
  setUserProfile: (p: UserProfile) => void
  postConversation: boolean
  setPostConversation: (v: boolean) => void
  logout: () => void
  isSessionValid: () => boolean
}

const AppStateContext = createContext<AppState | null>(null)

const SETTINGS_KEY = 'app.settings'
const SESSION_KEY = 'app.session'

function readSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { textSizePx: 16, darkMode: false }
}

function writeSettings(settings: Settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch {}
}

function ensureSession() {
  try {
    const now = Date.now()
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as { createdAt: number; ttlMs: number }
      return parsed
    }
    const created = { createdAt: now, ttlMs: 30 * 24 * 60 * 60 * 1000 }
    localStorage.setItem(SESSION_KEY, JSON.stringify(created))
    return created
  } catch {
    return { createdAt: Date.now(), ttlMs: 30 * 24 * 60 * 60 * 1000 }
  }
}

function applySettingsToDocument(settings: Settings) {
  const root = document.documentElement
  root.style.setProperty('--app-font-size', `${Math.max(14, Math.min(22, settings.textSizePx))}px`)
  if (settings.darkMode) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(() => readSettings())
  const [userProfile, setUserProfile] = useState<UserProfile>({ name: 'Livia Vaccaro', avatarUrl: 'https://avatars.githubusercontent.com/u/123456789?v=4', school: 'Mock School', teacher: 'Ms. Doe', classroom: '5-A' })
  const [postConversation, setPostConversation] = useState(false)

  // session bootstrap
  const sessionRef = useRef(ensureSession())

  const isSessionValid = useCallback(() => {
    const { createdAt, ttlMs } = sessionRef.current
    return Date.now() - createdAt < ttlMs
  }, [])

  const openDrawer = useCallback(() => {
    if (!isSessionValid()) return
    setIsDrawerOpen(true)
  }, [isSessionValid])

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])
  const toggleDrawer = useCallback(() => setIsDrawerOpen((v) => !v), [])

  // settings persistence + apply (debounced write)
  useEffect(() => {
    applySettingsToDocument(settings)
  }, [settings])

  const persistTimeout = useRef<number | null>(null)
  const updateSettings = useCallback((next: Partial<Settings>) => {
    setSettings((prev) => {
      const merged = { ...prev, ...next }
      // debounce write
      if (persistTimeout.current) {
        window.clearTimeout(persistTimeout.current)
      }
      persistTimeout.current = window.setTimeout(() => writeSettings(merged), 300)
      return merged
    })
  }, [])

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(SESSION_KEY)
    } catch {}
    setIsDrawerOpen(false)
    // In a real app, navigate to login
  }, [])

  const value = useMemo<AppState>(() => ({
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    settings,
    updateSettings,
    userProfile,
    setUserProfile,
    postConversation,
    setPostConversation,
    logout,
    isSessionValid,
  }), [isDrawerOpen, openDrawer, closeDrawer, toggleDrawer, settings, updateSettings, userProfile, postConversation, logout, isSessionValid])

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}


