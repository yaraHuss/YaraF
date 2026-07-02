import { useState, useRef, useEffect } from 'react'
import { Sparkles, X, Send } from 'lucide-react'
import { useChatbot } from '../hooks/useChatbot'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, loading, error } = useChatbot()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const handleSend = () => {
    if (!input.trim()) return
    sendMessage(input)
    setInput('')
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="fixed z-40 right-5 bottom-40 md:bottom-24 w-14 h-14 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center shadow-glow hover:scale-105 transition-transform"
      >
        {open ? <X className="text-ink" size={24} /> : <Sparkles className="text-ink" size={24} />}
      </button>

      {open && (
        <div className="fixed z-40 right-5 bottom-56 md:bottom-40 w-[88vw] max-w-sm h-[60vh] rounded-2xl border border-white/10 bg-navy shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 bg-navy2">
            <p className="text-sm font-medium text-offwhite">YARAF AI Assistant</p>
            <p className="text-xs text-mist">Ask about automation, support, or pricing</p>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm rounded-xl px-3 py-2 ${
                  m.role === 'user'
                    ? 'bg-electric text-white ml-auto'
                    : 'bg-white/5 text-offwhite'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && <div className="text-xs text-mist">Thinking…</div>}
            {error && <div className="text-xs text-red-400">{error}</div>}
          </div>

          <div className="p-3 border-t border-white/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message…"
              className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-offwhite placeholder:text-mist outline-none focus-visible:outline-cyan"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="w-9 h-9 rounded-full bg-cyan flex items-center justify-center shrink-0"
            >
              <Send size={16} className="text-ink" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
