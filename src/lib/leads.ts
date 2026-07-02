import { getFunctions, httpsCallable } from 'firebase/functions'
import app from './firebase'

export interface LeadFormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

/**
 * Sends the lead/consultation request to the Firebase backend, which stores it in Firestore
 * and forwards it to Zoho CRM when possible.
 */
export async function submitLead(data: LeadFormData) {
  const functions = getFunctions(app)
  const submitLeadFn = httpsCallable(functions, 'submitLead')
  return submitLeadFn(data)
}
