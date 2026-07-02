export interface BookingRequest {
  name: string
  email: string
  phone: string
  service: string
  date: string
  timeSlot: string
  message: string
}

export async function submitBooking(data: BookingRequest) {
  const subject = encodeURIComponent(`YARAF booking request from ${data.name}`)
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Date: ${data.date}`,
      `Time: ${data.timeSlot}`,
      '',
      data.message,
    ].join('\n')
  )

  window.location.href = `mailto:hello@yarafdigital.com?subject=${subject}&body=${body}`
}
