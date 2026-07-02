import SEO from '../components/SEO'
import LeadForm from '../components/LeadForm'
import ScheduleWidget from '../components/ScheduleWidget'
import { useUi } from '../context/UiContext'

export default function Contact() {
  const { t } = useUi()

  return (
    <>
      <SEO
        title={t.nav.contact}
        description={t.contact.description}
        path="/contact"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.nav.contact}</p>
        <h1 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-offwhite max-w-2xl">
          {t.contact.title}
        </h1>
        <p className="mt-5 text-mist max-w-xl">{t.contact.description}</p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-navy p-7 md:p-8">
            <h2 className="font-display text-lg font-semibold text-offwhite mb-6">{t.contact.sendForm}</h2>
            <LeadForm />
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-offwhite mb-6">{t.contact.scheduleForm}</h2>
            <ScheduleWidget />
          </div>
        </div>
      </section>
    </>
  )
}
