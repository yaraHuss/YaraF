export interface LeadFormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

export async function submitLead(data: LeadFormData) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || 'Failed to submit lead')
  }
}
