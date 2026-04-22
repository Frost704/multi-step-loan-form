import type { LoanApplicationFormData } from './types'

export const APPLICATION_DEFAULTS: LoanApplicationFormData = {
  phone: '',
  firstName: '',
  lastName: '',
  gender: '',
  placeOfWork: '',
  address: '',
  amount: 200,
  periodDays: 10,
}
