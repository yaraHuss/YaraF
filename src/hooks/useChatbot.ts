import { useState, useCallback } from 'react'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const ENDPOINT = import.meta.env.VITE_CHATBOT_ENDPOINT as string | undefined

/**
 * Talks to a backend endpoint (e.g. a Firebase Cloud Function) that holds
 * the actual AI API key server-side. The frontend never calls OpenAI/Claude
 * directly — set VITE_CHATBOT_ENDPOINT once that function is deployed.
 */
export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi, I'm the YARAF AI assistant. Ask me about automating your operations, customer support, or internal systems.",
    },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return
      const next: ChatMessage[] = [...messages, { role: 'user', content: text }]
      setMessages(next)
      setLoading(true)
      setError(null)

      try {
        if (!ENDPOINT) {
          throw new Error('Chatbot endpoint not configured yet.')
        }
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: next }),
        })
        if (!res.ok) throw new Error('Chatbot request failed.')
        const data = await res.json()
        setMessages([...next, { role: 'assistant', content: data.reply as string }])
      } catch (err) {
        setError(
          ENDPOINT
            ? 'Something went wrong reaching the assistant. Please try WhatsApp instead.'
            : "The AI assistant isn't connected yet — set VITE_CHATBOT_ENDPOINT to enable it."
        )
      } finally {
        setLoading(false)
      }
    },
    [messages]
  )

  return { messages, sendMessage, loading, error }
}
