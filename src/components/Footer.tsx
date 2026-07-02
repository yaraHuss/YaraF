import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-ink pt-14 pb-24 md:pb-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="font-display text-lg font-semibold text-offwhite">
            YARAF<span className="text-cyan">.</span>
          </Link>
          <p className="mt-3 text-sm text-mist max-w-xs">
            AI automation and enterprise transformation for UAE and GCC businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-offwhite mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-mist">
            <li><Link to="/" className="hover:text-cyan transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-cyan transition-colors">Services</Link></li>
            <li><Link to="/industries" className="hover:text-cyan transition-colors">Industries</Link></li>
            <li><Link to="/case-studies" className="hover:text-cyan transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-offwhite mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-mist">
            <li><Link to="/contact" className="hover:text-cyan transition-colors">Book a Consultation</Link></li>
            <li><a href="https://wa.me/971588005615" className="hover:text-cyan transition-colors">WhatsApp</a></li>
            <li><a href="mailto:hello@yarafdigital.com" className="hover:text-cyan transition-colors">hello@yarafdigital.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-offwhite mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-mist">
            <li><Link to="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-cyan transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-xs text-mist flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {year} YARAF Digital. All rights reserved.</p>
        <p>UAE-based · Engineering hub in Pakistan</p>
      </div>
    </footer>
  )
}
