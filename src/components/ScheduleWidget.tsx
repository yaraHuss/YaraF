import { useMemo, useState } from 'react'
import { submitBooking } from '../lib/bookings'
import { useUi } from '../context/UiContext'

const slots = ['10:00', '11:30', '14:00', '15:30', '17:00']

function formatDisplay(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export default function ScheduleWidget() {
  const { t, locale } = useUi()
  const services = t.contact.serviceOptions
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedSlot, setSelectedSlot] = useState<string>('')
  const [service, setService] = useState<string>(services[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const futureDates = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() + i + 1)
      return date.toISOString().slice(0, 10)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedSlot) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await submitBooking({ name, email, phone, service, date: selectedDate, timeSlot: selectedSlot, message })
      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setSelectedDate('')
      setSelectedSlot('')
      setService(services[0])
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-navy p-8 text-center">
        <p className="text-offwhite font-medium">{t.contact.bookingSuccess}</p>
        <p className="text-mist text-sm mt-1">{t.contact.bookingSuccessCopy}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-mist">{t.contact.notes}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-medium text-mist mb-1.5">{t.contact.pickDate}</span>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
          >
            <option value="">{t.contact.pickDate}</option>
            {futureDates.map((date) => (
              <option key={date} value={date} className="bg-navy text-offwhite">
                {formatDisplay(new Date(date), locale)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-mist mb-1.5">{t.contact.selectSlot}</span>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
          >
            <option value="">{t.contact.selectSlot}</option>
            {slots.map((slot) => (
              <option key={slot} value={slot} className="bg-navy text-offwhite">
                {slot}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium text-mist mb-1.5">{t.contact.name}</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.form.placeholders.name}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
        />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-medium text-mist mb-1.5">{t.contact.email}</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.form.placeholders.email}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-mist mb-1.5">{t.contact.phone}</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.form.placeholders.phone}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium text-mist mb-1.5">{t.contact.chooseService}</span>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
        >
          {services.map((option) => (
            <option key={option} value={option} className="bg-navy text-offwhite">
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-xs font-medium text-mist mb-1.5">{t.contact.messageQuestion}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={t.form.placeholders.message}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite outline-none focus-visible:outline-cyan"
        />
      </label>

      {status === 'error' && <p className="text-sm text-red-400">{t.contact.bookingError}</p>}

      <button
        type="submit"
        className="w-full md:w-auto rounded-full bg-electric hover:bg-electric/90 text-white font-medium px-7 py-3 transition-colors shadow-glowSm"
      >
        {t.contact.bookingCta}
      </button>
    </form>
  )
}
