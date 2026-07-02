import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { useUi } from '../context/UiContext'

export default function Industries() {
  const { t } = useUi()

  return (
    <>
      <SEO
        title={t.nav.industries}
        description={t.industries.description}
        path="/industries"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <Reveal as="div" className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.nav.industries}</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-offwhite max-w-2xl">
            {t.industries.title}
          </h1>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.industries.cards.map((industry, index) => (
            <Reveal
              key={industry.name}
              delay={index * 80}
              className="rounded-2xl border border-white/10 bg-navy p-7"
            >
              <h2 className="font-display text-lg font-semibold text-offwhite">{industry.name}</h2>
              <p className="mt-2 text-sm text-mist">{industry.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
