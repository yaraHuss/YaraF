import { Routes, Route } from 'react-router-dom'
import { UiProvider } from './context/UiContext'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ChatbotWidget from './components/ChatbotWidget'

import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <UiProvider>
      <div className="min-h-screen flex flex-col bg-ink">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
        <WhatsAppButton />
        <ChatbotWidget />
      </div>
    </UiProvider>
  )
}
