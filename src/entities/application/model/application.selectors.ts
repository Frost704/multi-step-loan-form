import type { LoanApplicationDraft } from './types'

export const isPersonalInfoComplete = (d: LoanApplicationDraft): boolean =>
  Boolean(d.firstName && d.lastName && d.phone && d.gender)

export const isAddressWorkComplete = (d: LoanApplicationDraft): boolean =>
  Boolean(d.placeOfWork && d.address)
