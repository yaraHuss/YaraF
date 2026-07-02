import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { useUi } from '../context/UiContext'

export default function CaseStudies() {
  const { t } = useUi()

  return (
    <>
      <SEO
        title={t.nav.caseStudies}
        description={t.caseStudies.description}
        path="/case-studies"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <Reveal as="div" className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.nav.caseStudies}</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-offwhite max-w-2xl">
            {t.caseStudies.title}
          </h1>
          <p className="mt-5 text-mist max-w-xl">{t.caseStudies.description}</p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {t.caseStudies.cards.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="rounded-2xl border border-white/10 bg-navy p-7 md:p-8"
            >
              <p className="font-mono text-xs text-cyan">{item.tag}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-offwhite">{item.title}</h2>
              <p className="mt-2 text-sm text-mist max-w-2xl">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
