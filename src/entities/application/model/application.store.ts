import { create } from 'zustand'
import { APPLICATION_DEFAULTS } from './defaults'
import type { LoanApplicationFormData } from './types'

type ApplicationFormStore = {
  draft: LoanApplicationFormData
  updateDraft: (patch: Partial<LoanApplicationFormData>) => void
  resetDraft: () => void
}

export const useApplicationFormStore = create<ApplicationFormStore>(set => ({
  draft: APPLICATION_DEFAULTS,
  updateDraft: patch =>
    set(state => ({
      draft: {
        ...state.draft,
        ...patch,
      },
    })),
  resetDraft: () =>
    set({
      draft: APPLICATION_DEFAULTS,
    }),
}))
