import { NavLink } from 'react-router-dom'
import { Home, Layers, Building2, Sparkles, MessageCircle } from 'lucide-react'
import { useUi } from '../context/UiContext'

const iconMap = [Home, Layers, Building2, Sparkles, MessageCircle]
const routes = ['home', 'services', 'industries', 'caseStudies', 'contact'] as const

export default function BottomNav() {
  const { t } = useUi()

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-t border-white/5 safe-bottom"
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-between px-2">
        {routes.map((key, index) => {
          const to = key === 'home' ? '/' : key === 'caseStudies' ? '/case-studies' : `/${key}`
          const label = t.nav[key]
          const Icon = iconMap[index]
          return (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                    isActive ? 'text-cyan' : 'text-mist'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={22}
                      strokeWidth={isActive ? 2.4 : 1.8}
                      className={isActive ? 'drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]' : ''}
                    />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
