import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

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
  const bookingsRef = collection(db, 'bookings')
  return addDoc(bookingsRef, {
    ...data,
    createdAt: serverTimestamp(),
    status: 'pending',
  })
}
