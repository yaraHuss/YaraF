import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useUi } from '../context/UiContext'

const links = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/industries', key: 'industries' },
  { to: '/case-studies', key: 'caseStudies' },
  { to: '/contact', key: 'contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { locale, theme, toggleLocale, toggleTheme, t } = useUi()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 hidden md:block ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-offwhite">
          YARAF<span className="text-cyan">.</span>
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-cyan' : 'text-mist hover:text-offwhite'
                  }`
                }
              >
                {t.nav[l.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-offwhite transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {locale === 'en' ? t.theme.arabic : t.theme.english}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-offwhite transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {theme === 'dark' ? t.theme.light : t.theme.dark}
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-electric hover:bg-electric/90 text-white text-sm font-medium px-5 py-2.5 transition-colors shadow-glowSm"
          >
            {t.nav.book}
          </Link>
        </div>
      </nav>
    </header>
  )
}
