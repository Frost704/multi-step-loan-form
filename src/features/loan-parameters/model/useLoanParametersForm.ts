import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { submitErrors } from '@/shared/i18n/en'
import { APP_ROUTES } from '@/shared/constants/routes'

import { HttpError } from '../api/submitLoanApplication'
import { useSubmitLoanApplication } from './useSubmitLoanApplication'

type SubmitDialogStatus = 'success' | 'error'

export function useLoanParametersForm() {
  const navigate = useNavigate()

  const firstName = useApplicationFormStore(s => s.formData.firstName)
  const lastName = useApplicationFormStore(s => s.formData.lastName)
  const resetFormData = useApplicationFormStore(s => s.resetFormData)

  const [submitDialogStatus, setSubmitDialogStatus] = useState<SubmitDialogStatus | null>(null)

  const {
    mutate: submitApplication,
    isPending: isSubmitting,
    error,
    reset: resetSubmitState,
  } = useSubmitLoanApplication()

  const onSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    resetSubmitState()
    submitApplication(
      { firstName, lastName },
      {
        onSuccess: () => setSubmitDialogStatus('success'),
        onError: () => setSubmitDialogStatus('error'),
      },
    )
  }

  const onBackClick = () => navigate(APP_ROUTES.addressWork)

  const closeSubmitDialog = () => setSubmitDialogStatus(null)

  const resetApplication = () => {
    closeSubmitDialog()
    navigate(APP_ROUTES.root, { replace: true })
    resetFormData()
    resetSubmitState()
  }

  const submitError =
    error instanceof HttpError
      ? error.status >= 500
        ? submitErrors.serverError
        : submitErrors.generic
      : error != null
        ? submitErrors.generic
        : null

  return {
    onSubmit,
    onBackClick,
    isSubmitting,
    submitError,
    submitDialogStatus,
    closeSubmitDialog,
    resetApplication,
  }
}
