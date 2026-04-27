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

export type LoanApplicationDraft = Omit<LoanApplication, 'gender'> & {
  gender: Gender | null
}
