import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page doesn't exist." path="/404" />
      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-cyan text-sm tracking-[0.3em]">404</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-offwhite leading-tight">
          This page doesn’t exist
        </h1>
        <p className="mt-4 text-mist text-base sm:text-lg leading-8">
          The page you’re looking for may have moved or been removed.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-electric text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-electric/90">
          Back to home
        </Link>
      </section>
    </>
  )
}
