import { z } from 'zod'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import {
  APPLICATION_DEFAULTS,
  LOAN_AMOUNT_MAX,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_STEP,
  LOAN_TERM_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_STEP,
} from './defaults'
import type { LoanApplicationDraft } from './types'

type ApplicationFormStore = {
  formData: LoanApplicationDraft
  updateFormData: (patch: Partial<LoanApplicationDraft>) => void
  resetFormData: () => void
}

const formDataSchema = z
  .object({
    phone: z.string().catch(''),
    firstName: z.string().catch(''),
    lastName: z.string().catch(''),
    gender: z.enum(['male', 'female']).nullable().catch(null),
    placeOfWork: z.string().catch(''),
    address: z.string().catch(''),
    amount: z
      .number()
      .int()
      .multipleOf(LOAN_AMOUNT_STEP)
      .min(LOAN_AMOUNT_MIN)
      .max(LOAN_AMOUNT_MAX)
      .catch(LOAN_AMOUNT_MIN),
    periodDays: z
      .number()
      .int()
      .multipleOf(LOAN_TERM_STEP)
      .min(LOAN_TERM_MIN)
      .max(LOAN_TERM_MAX)
      .catch(LOAN_TERM_MIN),
  })
  .catch(APPLICATION_DEFAULTS)

const persistedSchema = z.object({
  formData: formDataSchema,
})

// Zustand keeps the form data available across routed steps without prop drilling.
export const useApplicationFormStore = create<ApplicationFormStore>()(
  persist(
    set => ({
      formData: APPLICATION_DEFAULTS,
      updateFormData: patch =>
        set(state => ({
          formData: {
            ...state.formData,
            ...patch,
          },
        })),
      resetFormData: () =>
        set({
          formData: APPLICATION_DEFAULTS,
        }),
    }),
    {
      name: 'loan-application-draft',
      storage: createJSONStorage(() => sessionStorage),
      merge: (persisted, current): ApplicationFormStore => {
        const formData = persistedSchema.safeParse(persisted).data?.formData ?? APPLICATION_DEFAULTS
        return { ...current, formData }
      },
    },
  ),
)
