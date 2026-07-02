import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="This page doesn't exist." path="/404" />
      <section className="max-w-xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-cyan text-sm">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-offwhite">This page doesn't exist</h1>
        <p className="mt-3 text-mist text-sm">The page you're looking for may have moved or been removed.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-electric text-white px-6 py-2.5 text-sm font-medium">
          Back to home
        </Link>
      </section>
    </>
  )
}
