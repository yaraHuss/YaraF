import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const number = (import.meta.env.VITE_WHATSAPP_NUMBER || '+971 58 800 5615').replace(/\D/g, '')
  const message = encodeURIComponent("Hi YARAF Digital, I'd like to know more about your AI automation services.")
  const href = number ? `https://wa.me/${number}?text=${message}` : undefined

  return (
    <a
      href={href ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title={href ? 'Chat on WhatsApp' : 'Add VITE_WHATSAPP_NUMBER to enable this button'}
      className="fixed z-40 right-5 bottom-24 md:bottom-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="text-white" size={26} />
    </a>
  )
}
