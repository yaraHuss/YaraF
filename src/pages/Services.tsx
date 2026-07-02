import { Workflow, Headset, LayoutDashboard, BarChart3, MessageSquare, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { useUi } from '../context/UiContext'

const icons = [Workflow, Headset, LayoutDashboard, BarChart3, MessageSquare, Users]

export default function Services() {
  const { t } = useUi()

  return (
    <>
      <SEO
        title={t.nav.services}
        description="Enterprise AI automation, AI customer support, internal platforms, and managed AI transformation for GCC businesses."
        path="/services"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <Reveal as="div" className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.nav.services}</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-offwhite max-w-2xl">
            {t.services.title}
          </h1>
          <p className="mt-5 text-mist max-w-xl">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.cards.map((service, index) => {
            const Icon = icons[index] ?? Workflow
            return (
              <Reveal key={service.title} delay={index * 70} className="rounded-2xl border border-white/10 bg-navy p-7 hover:border-cyan/30 transition-colors">
                <Icon className="text-cyan" size={24} />
                <h2 className="mt-4 font-display text-lg font-semibold text-offwhite">{service.title}</h2>
                <p className="mt-2 text-sm text-mist">{service.desc}</p>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link to="/contact" className="rounded-full bg-electric hover:bg-electric/90 text-white font-medium px-7 py-3 transition-colors shadow-glowSm">
            {t.services.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
