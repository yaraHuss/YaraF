import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement; prefill?: object }) => void
    }
  }
}

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null)
  const url = import.meta.env.VITE_CALENDLY_URL as string | undefined

  useEffect(() => {
    if (!url || !ref.current) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      window.Calendly?.initInlineWidget({ url, parentElement: ref.current! })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  if (!url) {
    return (
      <div className="rounded-2xl border border-white/10 bg-navy p-8 text-center text-mist text-sm">
        Add <code className="text-cyan">VITE_CALENDLY_URL</code> in your environment variables to enable booking here.
      </div>
    )
  }

  return <div ref={ref} className="min-h-[700px] rounded-2xl overflow-hidden bg-navy" />
}
