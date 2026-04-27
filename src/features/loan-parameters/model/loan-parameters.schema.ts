import { z } from 'zod'

import { en } from '@/shared/i18n/en'

import {
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
} from './loan-parameters.constants'

const t = en.loanParameters.errors

export const loanParametersSchema = z.object({
  amount: z
    .number({ message: t.amountInvalid })
    .int({ message: t.amountInvalid })
    .min(LOAN_AMOUNT_MIN, { message: t.amountInvalid })
    .max(LOAN_AMOUNT_MAX, { message: t.amountInvalid }),

  periodDays: z
    .number({ message: t.termInvalid })
    .int({ message: t.termInvalid })
    .min(LOAN_TERM_MIN, { message: t.termInvalid })
    .max(LOAN_TERM_MAX, { message: t.termInvalid }),
})

export type LoanParametersFormValues = z.infer<typeof loanParametersSchema>
