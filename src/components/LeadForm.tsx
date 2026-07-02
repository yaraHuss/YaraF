import { useState, FormEvent } from 'react'
import { submitLead } from '../lib/leads'
import { useUi } from '../context/UiContext'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LeadForm() {
  const { t } = useUi()
  const services = t.contact.serviceOptions
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  })

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitLead(form)
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', service: services[0], message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-navy p-8 text-center">
        <p className="text-offwhite font-medium">{t.contact.formSuccess}</p>
        <p className="text-mist text-sm mt-1">{t.contact.formSuccessCopy}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={t.contact.name} required>
          <input required value={form.name} onChange={update('name')} className={inputClass} placeholder={t.form.placeholders.name} />
        </Field>
        <Field label={t.contact.company}>
          <input value={form.company} onChange={update('company')} className={inputClass} placeholder={t.form.placeholders.company} />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={t.contact.email} required>
          <input required type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder={t.form.placeholders.email} />
        </Field>
        <Field label={t.contact.phone}>
          <input value={form.phone} onChange={update('phone')} className={inputClass} placeholder={t.form.placeholders.phone} />
        </Field>
      </div>

      <Field label={t.contact.serviceQuestion}>
        <select value={form.service} onChange={update('service')} className={inputClass}>
          {services.map((s) => (
            <option key={s} value={s} className="bg-navy">
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t.contact.messageQuestion}>
        <textarea
          value={form.message}
          onChange={update('message')}
          rows={4}
          className={inputClass}
          placeholder={t.form.placeholders.message}
        />
      </Field>

      {status === 'error' && (
        <p className="text-sm text-red-400">{t.contact.submitError}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto rounded-full bg-electric hover:bg-electric/90 disabled:opacity-60 text-white font-medium px-7 py-3 transition-colors shadow-glowSm"
      >
        {status === 'submitting' ? t.form.sending : t.form.button}
      </button>
    </form>
  )
}

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-offwhite placeholder:text-mist outline-none focus-visible:outline-cyan focus-visible:border-cyan/40'

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-mist mb-1.5">
        {label} {required && <span className="text-cyan">*</span>}
      </span>
      {children}
    </label>
  )
}
