export interface LeadFormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

/**
 * Provides a simple front-end fallback for the contact form.
 * The form now opens the user's email client with the details prepared.
 */
export async function submitLead(data: LeadFormData) {
  const subject = encodeURIComponent(`YARAF inquiry from ${data.name}`)
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      '',
      data.message,
    ].join('\n')
  )

  window.location.href = `mailto:hello@yarafdigital.com?subject=${subject}&body=${body}`
}
