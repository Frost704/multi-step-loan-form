import { create } from 'zustand'
import { APPLICATION_DEFAULTS } from './defaults'
import type { LoanApplicationDraft } from './types'

type ApplicationFormStore = {
  formData: LoanApplicationDraft
  updateFormData: (patch: Partial<LoanApplicationDraft>) => void
  resetFormData: () => void
}

export const useApplicationFormStore = create<ApplicationFormStore>(set => ({
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
}))
