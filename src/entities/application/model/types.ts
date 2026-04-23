export type Gender = 'male' | 'female'

export type LoanApplication = {
  phone: string
  firstName: string
  lastName: string
  gender: Gender
  placeOfWork: string
  address: string
  amount: number
  periodDays: number
}

export type LoanApplicationDraft = {
  phone: string
  firstName: string
  lastName: string
  gender: Gender | null
  placeOfWork: string
  address: string
  amount: number
  periodDays: number
}
