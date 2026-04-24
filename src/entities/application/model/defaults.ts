import type { LoanApplicationDraft } from './types'

export const LOAN_AMOUNT_MIN = 200
export const LOAN_AMOUNT_MAX = 1000
export const LOAN_TERM_MIN = 10
export const LOAN_TERM_MAX = 30

export const APPLICATION_DEFAULTS: LoanApplicationDraft = {
  phone: '',
  firstName: '',
  lastName: '',
  gender: null,
  placeOfWork: '',
  address: '',
  amount: LOAN_AMOUNT_MIN,
  periodDays: LOAN_TERM_MIN,
}
