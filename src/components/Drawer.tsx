import FocusTrap from 'focus-trap-react'
import { HelpCircle, LogOut, Moon, Sun, Type, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppState } from '../contexts/AppStateProvider'

function useAllowedForDrawer() {
  const { pathname } = useLocation()
  const { postConversation } = useAppState()
  if (pathname === '/conversation') return false
  if (pathname === '/feedback') return postConversation
  if (pathname === '/replay') return false
  return pathname === '/' || pathname === '/completed' || pathname === '/progress'
}

export default function Drawer() {
  const { isDrawerOpen, closeDrawer, settings, updateSettings, userProfile, logout } = useAppState()
  const allowed = useAllowedForDrawer()
  const [confirmLogout, setConfirmLogout] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Body scroll lock - Best Practices
  useEffect(() => {
    if (!isDrawerOpen) return

    // Mevcut scroll pozisyonunu kaydet
    const scrollY = window.scrollY
    const body = document.body
    const html = document.documentElement

    // Scrollbar genişliğini hesapla (layout shift önlemek için)
    const scrollbarWidth = window.innerWidth - html.clientWidth

    // Body'nin orijinal stillerini kaydet
    const originalStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    }

    // Body scroll'u kilitle
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    
    // Scrollbar kaybolduğunda layout shift'i önle
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    // iOS Safari için ek düzeltmeler
    body.style.touchAction = 'none'
    body.style.setProperty('-webkit-overflow-scrolling', 'auto')

    // Cleanup: Her şeyi eski haline getir
    return () => {
      body.style.overflow = originalStyles.overflow
      body.style.position = originalStyles.position
      body.style.top = originalStyles.top
      body.style.width = originalStyles.width
      body.style.paddingRight = originalStyles.paddingRight
      body.style.touchAction = ''
      body.style.removeProperty('-webkit-overflow-scrolling')

      // Scroll pozisyonunu geri yükle
      window.scrollTo(0, scrollY)
    }
  }, [isDrawerOpen])

  // ESC ile kapanma
  useEffect(() => {
    if (!isDrawerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeDrawer()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isDrawerOpen, closeDrawer])

  // Navigasyonda otomatik kapanma (App de ayrıca ele alıyor, burada güvenli tekrar)
  const { pathname } = useLocation()
  useEffect(() => {
    if (isDrawerOpen) closeDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <AnimatePresence>
      {isDrawerOpen && allowed && (
        <div className="fixed inset-0 z-50" role="presentation" aria-hidden={!isDrawerOpen}>
          <FocusTrap active={isDrawerOpen} focusTrapOptions={{ allowOutsideClick: true }}>
            <div className="contents">
              {/* Overlay */}
              <motion.div
                ref={overlayRef}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={closeDrawer}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
              {/* Panel */}
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
                className="absolute left-0 top-0 h-full w-[84%] max-w-[360px] bg-background dark:bg-card outline-none overflow-hidden"
                style={{
                  boxShadow: '4px 0 40px rgba(0, 0, 0, 0.15)'
                }}
                initial={{ x: '-100%' }}
                animate={{ x: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                exit={{ x: '-100%', transition: { duration: 0.2, ease: 'easeIn' } }}
              >
                {/* Header */}
                <div className="relative px-5 py-2 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <h2 id="drawer-title" className="text-lg font-semibold text-foreground">Profil & Ayarlar</h2>
                    <motion.button
                      type="button"
                      onClick={closeDrawer}
                      className="p-2 rounded-full hover:bg-muted/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1] min-w-10 min-h-10"
                      aria-label="Çekmeceyi kapat"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                    </motion.button>
                  </div>
                </div>

                <div className="px-5 py-5 overflow-y-auto h-[calc(100%-80px)] pb-safe scrollbar-hide">
                  {/* Profil Card */}
                  <motion.section 
                    aria-labelledby="profile-section-title"
                    className="mb-6 bg-linear-to-br from-[#EDE4FF] to-[#E7F3FF] dark:from-[#5F33E1]/20 dark:to-[#0087FF]/20 rounded-[24px] py-6 px-5 shadow-[0px_4px_24px_0px_rgba(95,51,225,0.12)]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 id="profile-section-title" className="sr-only">Profil bilgileri</h3>
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar */}
                      <div className="relative mb-4">
                        <motion.img 
                          src={userProfile.avatarUrl || 'https://via.placeholder.com/80'} 
                          alt="Kullanıcı avatarı" 
                          width={80} 
                          height={80} 
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-white/60 dark:ring-white/30 shadow-lg" 
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <motion.div 
                          className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-[3px] border-white dark:border-card shadow-md" 
                          aria-hidden="true"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                        />
                      </div>
                      
                      {/* User Info */}
                      <div className="w-full">
                        <motion.p 
                          className="text-lg font-bold text-[#24252C] dark:text-foreground mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {userProfile.name || 'Student'}
                        </motion.p>
                        <motion.p 
                          className="text-xs text-[#6E6A7C] dark:text-muted-foreground leading-relaxed px-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                        >
                          {[userProfile.school, userProfile.teacher, userProfile.classroom]
                            .filter(Boolean)
                            .join(' • ') || 'Bilgi yok'}
                        </motion.p>
                      </div>
                    </div>
                  </motion.section>

                  {/* Ayarlar */}
                  <motion.section 
                    aria-labelledby="settings-section-title" 
                    className="mb-5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 id="settings-section-title" className="text-sm font-bold text-foreground mb-3 px-1">
                      Görünüm Ayarları
                    </h3>

                    {/* Metin boyutu card */}
                    <div className="bg-white dark:bg-card rounded-[16px] p-4 mb-3 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)] dark:shadow-[0px_2px_16px_0px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-[#E7F3FF] dark:bg-[#0087FF]/20 flex items-center justify-center">
                          <Type className="w-4 h-4 text-[#0087FF]" aria-hidden="true" />
                        </div>
                        <label htmlFor="text-size" className="text-sm font-medium text-foreground">
                          Metin Boyutu
                        </label>
                        <span className="ml-auto text-sm font-semibold text-[#5F33E1]" aria-hidden="true">
                          {Math.round(settings.textSizePx)}px
                        </span>
                      </div>
                      <input
                        id="text-size"
                        type="range"
                        min={14}
                        max={22}
                        step={1}
                        value={Math.max(14, Math.min(22, settings.textSizePx))}
                        onChange={(e) => updateSettings({ textSizePx: Number(e.target.value) })}
                        className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#5F33E1] [&::-webkit-slider-thumb]:shadow-[0px_2px_8px_0px_rgba(95,51,225,0.4)] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#5F33E1] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-[0px_2px_8px_0px_rgba(95,51,225,0.4)] [&::-moz-range-thumb]:cursor-pointer"
                        aria-valuemin={14}
                        aria-valuemax={22}
                        aria-valuenow={Math.round(settings.textSizePx)}
                      />
                    </div>

                    {/* Koyu mod card */}
                    <div className="bg-white dark:bg-card rounded-[16px] p-4 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)] dark:shadow-[0px_2px_16px_0px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#FFE4F2] dark:bg-[#5F33E1]/20 flex items-center justify-center">
                            {settings.darkMode ? (
                              <Moon className="w-4 h-4 text-[#5F33E1]" aria-hidden="true" />
                            ) : (
                              <Sun className="w-4 h-4 text-[#FF7D53]" aria-hidden="true" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-foreground" id="darkmode-label">
                            {settings.darkMode ? 'Koyu Mod' : 'Açık Mod'}
                          </span>
                        </div>
                        <motion.button
                          type="button"
                          aria-labelledby="darkmode-label"
                          aria-pressed={settings.darkMode}
                          onClick={() => updateSettings({ darkMode: !settings.darkMode })}
                          className={`relative inline-flex items-center w-[52px] h-7 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1]`}
                          style={{
                            backgroundColor: settings.darkMode ? '#5F33E1' : '#E5E7EB',
                            boxShadow: settings.darkMode 
                              ? '0px 2px 8px rgba(95, 51, 225, 0.3)' 
                              : '0px 2px 8px rgba(0, 0, 0, 0.1)'
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span 
                            className="absolute w-5 h-5 bg-white rounded-full shadow-sm"
                            animate={{
                              x: settings.darkMode ? 27 : 4
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30
                            }}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </motion.section>

                  {/* Sistem İşlemleri */}
                  <motion.section 
                    aria-labelledby="system-section-title"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 id="system-section-title" className="text-sm font-bold text-foreground mb-3 px-1">
                      Sistem
                    </h3>
                    <div className="flex flex-col gap-3">
                      {/* Help/Support button */}
                      <motion.a
                        href="#"
                        className="flex items-center justify-center gap-2 h-12 px-4 rounded-[14px] bg-linear-to-r from-[#E7F3FF] to-[#EDE4FF] dark:from-[#0087FF]/10 dark:to-[#5F33E1]/10 text-foreground font-medium shadow-[0px_2px_12px_0px_rgba(0,135,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1] transition-all"
                        aria-label="Yardım ve destek"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <HelpCircle className="w-5 h-5 text-[#0087FF]" aria-hidden="true" />
                        <span className="text-sm font-semibold">Help / Support</span>
                      </motion.a>
                      
                      {/* Logout */}
                      {!confirmLogout ? (
                        <motion.button
                          type="button"
                          onClick={() => setConfirmLogout(true)}
                          className="flex items-center justify-center gap-2 h-12 px-4 rounded-[14px] bg-linear-to-r from-[#FFE4F2] to-[#FFE9E1] dark:from-destructive/20 dark:to-destructive/30 text-[#F2582C] dark:text-red-400 font-medium shadow-[0px_2px_12px_0px_rgba(242,88,44,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1] transition-all"
                          aria-label="Çıkış yap"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <LogOut className="w-5 h-5" aria-hidden="true" />
                          <span className="text-sm font-semibold">Çıkış Yap</span>
                        </motion.button>
                      ) : (
                        <motion.div 
                          role="region" 
                          aria-label="Çıkış onayı"
                          className="bg-white dark:bg-card rounded-[14px] p-4 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)]"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <p className="text-sm font-medium text-foreground mb-3 text-center">
                            Çıkış yapmak istediğinize emin misiniz?
                          </p>
                          <div className="flex items-center gap-2">
                            <motion.button
                              type="button"
                              onClick={() => { setConfirmLogout(false); logout(); }}
                              className="flex-1 h-10 px-3 rounded-[12px] bg-destructive text-white font-medium shadow-[0px_2px_8px_0px_rgba(242,88,44,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1]"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Evet
                            </motion.button>
                            <motion.button
                              type="button"
                              onClick={() => setConfirmLogout(false)}
                              className="flex-1 h-10 px-3 rounded-[12px] bg-muted text-foreground font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1]"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              İptal
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.section>
                </div>
              </motion.aside>
            </div>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  )
}


