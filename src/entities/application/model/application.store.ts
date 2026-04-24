import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { APPLICATION_DEFAULTS } from './defaults'
import type { LoanApplicationDraft } from './types'

type ApplicationFormStore = {
  formData: LoanApplicationDraft
  updateFormData: (patch: Partial<LoanApplicationDraft>) => void
  resetFormData: () => void
}

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
    { name: 'loan-application-draft', storage: createJSONStorage(() => sessionStorage) },
  ),
)
