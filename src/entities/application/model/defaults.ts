import type { LoanApplicationDraft } from './types'

export const APPLICATION_DEFAULTS: LoanApplicationDraft = {
  phone: '',
  firstName: '',
  lastName: '',
  gender: null,
  placeOfWork: '',
  address: '',
  amount: 200,
  periodDays: 10,
}
