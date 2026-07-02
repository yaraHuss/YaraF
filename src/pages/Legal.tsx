import SEO from '../components/SEO'
import { useUi } from '../context/UiContext'

export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const { locale, t } = useUi()
  const isPrivacy = type === 'privacy'
  const legal = t.legal
  const content = isPrivacy ? legal.privacy : legal.terms
  const title = isPrivacy ? legal.privacyTitle : legal.termsTitle

  return (
    <>
      <SEO
        title={title}
        description={content.intro}
        path={isPrivacy ? '/privacy' : '/terms'}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl font-semibold text-offwhite">{title}</h1>
        <p className="mt-3 text-sm text-mist">{legal.lastUpdated}</p>

        <div className="mt-10 space-y-8">
          <p className="text-sm leading-7 text-mist">{content.intro}</p>

          <div className="space-y-6">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-offwhite">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-mist">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
