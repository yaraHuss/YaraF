import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Workflow, Headset, LayoutDashboard, BarChart3 } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useUi } from '../context/UiContext'

export default function Home() {
  const { t } = useUi()

  return (
    <>
      <SEO
        title={t.hero.title}
        description={t.hero.subtitle}
        path="/"
      />

      <Hero />
      <TrustStrip items={t.trustStrip} />
      <ServicesPreview />
      <HowWeWork />
      <AIDemoTeaser />
      <FinalCTA />
    </>
  )
}

function Hero() {
  const { t } = useUi()
  const [bgOffset, setBgOffset] = useState(0)

  useEffect(() => {
    let frame = 0
    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setBgOffset(window.scrollY * 0.04))
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-grid-fade">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 hero-grid" style={{ transform: `translateY(${bgOffset}px)` }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">
            {t.hero.tagline}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-offwhite">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-mist text-base md:text-lg max-w-md">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-electric hover:bg-electric/90 text-white font-medium px-6 py-3 transition-colors shadow-glowSm"
            >
              {t.hero.actionPrimary} <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 text-offwhite font-medium px-6 py-3 transition-colors"
            >
              {t.hero.actionSecondary}
            </Link>
          </div>
        </div>

        <WorkflowTraceVisual />
      </div>
    </section>
  )
}

/** Signature element: an animated trace connecting workflow nodes — literal stand-in for "automated workflow" */
function WorkflowTraceVisual() {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 })
  const { t } = useUi()
  const nodes = [
    { x: 40, y: 60, label: t.workflow.nodes[0] },
    { x: 200, y: 30, label: t.workflow.nodes[1] },
    { x: 360, y: 90, label: t.workflow.nodes[2] },
    { x: 200, y: 150, label: t.workflow.nodes[3] },
  ]
  return (
    <div ref={ref as any} className="relative rounded-2xl border border-white/10 bg-navy/60 p-6 md:p-8 shadow-glow">
      <svg viewBox="0 0 420 200" className="w-full h-auto">
        <path
          d="M40,60 L200,30 L360,90 L200,150 Z"
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className={visible ? 'animate-traceline' : ''}
          style={{ strokeDashoffset: 240 }}
        />
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="6" fill="#2F6FED" className={visible ? 'animate-pulseGlow' : ''} />
            <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.4" />
          </g>
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {nodes.map((n, i) => (
          <div key={i} className="font-mono text-[11px] text-mist">
            <span className="text-cyan">{String(i + 1).padStart(2, '0')}</span> &nbsp;{n.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-white/5 bg-navy/40">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        {items.map((item) => (
          <p key={item} className="text-xs md:text-sm text-mist font-medium">{item}</p>
        ))}
      </div>
    </section>
  )
}

function ServicesPreview() {
  const { t } = useUi()
  const services = [
    { icon: Workflow, ...t.servicesPreview.cards[0] },
    { icon: Headset, ...t.servicesPreview.cards[1] },
    { icon: LayoutDashboard, ...t.servicesPreview.cards[2] },
    { icon: BarChart3, ...t.servicesPreview.cards[3] },
  ]
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <Reveal as="div" className="space-y-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-offwhite">{t.servicesPreview.title}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <Reveal key={title} delay={index * 80} className="rounded-2xl border border-white/10 bg-navy p-6 hover:border-cyan/30 transition-colors">
              <Icon className="text-cyan" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold text-offwhite">{title}</h3>
              <p className="mt-2 text-sm text-mist">{desc}</p>
            </Reveal>
          ))}
        </div>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:underline">
          {t.servicesPreview.cta} <ArrowRight size={14} />
        </Link>
      </Reveal>
    </section>
  )
}

function HowWeWork() {
  const { t } = useUi()
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <Reveal as="div" className="space-y-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-offwhite">{t.howWeWork.title}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {t.howWeWork.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70} className="relative pl-6 border-l border-white/10">
              <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display font-semibold text-offwhite">{step.title}</h3>
              <p className="mt-1.5 text-sm text-mist">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function AIDemoTeaser() {
  const { t } = useUi()
  return (
    <Reveal as="section" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="rounded-3xl border border-cyan/20 bg-gradient-to-br from-navy to-navy2 p-8 md:p-14 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.aiDemoTeaser.small}</p>
        <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-offwhite">
          {t.aiDemoTeaser.title}
        </h2>
        <p className="mt-3 text-mist max-w-lg mx-auto">{t.aiDemoTeaser.subtitle}</p>
      </div>
    </Reveal>
  )
}

function FinalCTA() {
  const { t } = useUi()
  return (
    <Reveal as="section" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 text-center">
      <h2 className="font-display text-2xl md:text-4xl font-semibold text-offwhite">{t.finalCta.title}</h2>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <Link to="/contact" className="rounded-full bg-electric hover:bg-electric/90 text-white font-medium px-7 py-3 transition-colors shadow-glowSm">
          {t.finalCta.consult}
        </Link>
        <a href="https://wa.me/" className="rounded-full border border-white/15 hover:border-white/30 text-offwhite font-medium px-7 py-3 transition-colors">
          {t.finalCta.whatsapp}
        </a>
      </div>
    </Reveal>
  )
}
