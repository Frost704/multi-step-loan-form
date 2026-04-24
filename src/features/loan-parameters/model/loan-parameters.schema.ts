import { z } from 'zod'

import { en } from '@/shared/i18n/en'

import {
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_STEP,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_STEP,
} from './loan-parameters.constants'

const t = en.loanParameters.errors

const isStepValue = (value: number, min: number, step: number) =>
  Number.isInteger((value - min) / step)

const isValidNumber = (value: number) => Number.isFinite(value)

export const loanParametersSchema = z.object({
  amount: z
    .number({ message: t.amountInvalid })
    .refine(isValidNumber, { message: t.amountInvalid })
    .min(LOAN_AMOUNT_MIN, { message: t.amountInvalid })
    .max(LOAN_AMOUNT_MAX, { message: t.amountInvalid })
    .refine(value => isStepValue(value, LOAN_AMOUNT_MIN, LOAN_AMOUNT_STEP), {
      message: t.amountInvalid,
    }),

  periodDays: z
    .number({ message: t.termInvalid })
    .refine(isValidNumber, { message: t.termInvalid })
    .int({ message: t.termInvalid })
    .min(LOAN_TERM_MIN, { message: t.termInvalid })
    .max(LOAN_TERM_MAX, { message: t.termInvalid })
    .refine(value => isStepValue(value, LOAN_TERM_MIN, LOAN_TERM_STEP), {
      message: t.termInvalid,
    }),
})

export type LoanParametersFormValues = z.infer<typeof loanParametersSchema>
