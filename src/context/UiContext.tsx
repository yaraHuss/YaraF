import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../lib/translations'

type Theme = 'light' | 'dark'
type Locale = 'en' | 'ar'

interface UiContextValue {
  theme: Theme
  locale: Locale
  toggleTheme: () => void
  toggleLocale: () => void
  t: typeof translations.en
}

const UiContext = createContext<UiContextValue | undefined>(undefined)

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('yaraf-theme') as Theme | null
    const storedLocale = window.localStorage.getItem('yaraf-locale') as Locale | null
    if (storedTheme) setTheme(storedTheme)
    if (storedLocale) setLocale(storedLocale)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    root.classList.toggle('dark', theme === 'dark')
    root.lang = locale
    root.dir = locale === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem('yaraf-theme', theme)
    window.localStorage.setItem('yaraf-locale', locale)
  }, [theme, locale])

  const value = useMemo(
    () => ({
      theme,
      locale,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      toggleLocale: () => setLocale((current) => (current === 'en' ? 'ar' : 'en')),
      t: translations[locale],
    }),
    [theme, locale]
  )

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export function useUi() {
  const context = useContext(UiContext)
  if (!context) {
    throw new Error('useUi must be used within UiProvider')
  }
  return context
}
