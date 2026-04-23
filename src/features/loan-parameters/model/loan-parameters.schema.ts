import { z } from 'zod'

import {
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
} from './loan-parameters.constants'

export const loanParametersSchema = z.object({
  amount: z
    .number()
    .min(LOAN_AMOUNT_MIN, `Amount must be at least ${LOAN_AMOUNT_MIN}`)
    .max(LOAN_AMOUNT_MAX, `Amount must be at most ${LOAN_AMOUNT_MAX}`),
  periodDays: z
    .number()
    .min(LOAN_TERM_MIN, `Loan term must be at least ${LOAN_TERM_MIN} days`)
    .max(LOAN_TERM_MAX, `Loan term must be at most ${LOAN_TERM_MAX} days`),
})

export type LoanParametersFormValues = z.infer<typeof loanParametersSchema>
