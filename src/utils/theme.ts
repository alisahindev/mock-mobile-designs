/**
 * Theme sistemi için utility fonksiyonlar
 * CSS class'ları ile document root'a theme uygular
 */

export type ThemeName = 'default' | 'vibrant' | 'minimal';

const THEME_CLASS_PREFIX = 'theme-';

/**
 * Document root'a theme class'ını uygular
 * @param theme - Uygulanacak theme adı
 */
export function applyTheme(theme: ThemeName): void {
  const root = document.documentElement;

  // Mevcut tüm theme class'larını kaldır
  const currentThemes = Array.from(root.classList).filter(cls => cls.startsWith(THEME_CLASS_PREFIX));
  currentThemes.forEach(cls => root.classList.remove(cls));

  // Default theme hariç, yeni theme'i ekle
  if (theme !== 'default') {
    root.classList.add(`${THEME_CLASS_PREFIX}${theme}`);
  }
}

/**
 * Document root'tan mevcut theme'i okur
 * @returns Mevcut theme adı
 */
export function getCurrentTheme(): ThemeName {
  const root = document.documentElement;
  const themeClass = Array.from(root.classList).find(cls => cls.startsWith(THEME_CLASS_PREFIX));

  if (themeClass) {
    const themeName = themeClass.replace(THEME_CLASS_PREFIX, '') as ThemeName;
    return themeName;
  }

  return 'default';
}

/**
 * Tüm mevcut theme'lerin listesi
 */
export const availableThemes: readonly ThemeName[] = ['default', 'vibrant', 'minimal'] as const;
