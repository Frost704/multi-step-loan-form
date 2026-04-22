export type Gender = '' | 'male' | 'female'

export type LoanApplicationFormData = {
  phone: string
  firstName: string
  lastName: string
  gender: Gender
  placeOfWork: string
  address: string
  amount: number
  periodDays: number
}
