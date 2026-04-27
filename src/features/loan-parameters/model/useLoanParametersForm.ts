import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'
import { submitErrors } from '@/shared/i18n/en'

import { HttpError, submitLoanApplication } from '../api/submitLoanApplication'
import { loanParametersSchema, type LoanParametersFormValues } from './loan-parameters.schema'

type SubmitDialogStatus = 'success' | 'error'
type ValidationErrors = Partial<Record<keyof LoanParametersFormValues, string>>

export type SubmittedSnapshot = {
  firstName: string
  lastName: string
  amount: number
  periodDays: number
}

const getValidationErrors = (
  issues: Array<{ path: PropertyKey[]; message: string }>,
): ValidationErrors =>
  issues.reduce<ValidationErrors>((errors, issue) => {
    const field = issue.path[0]

    if (field === 'amount' || field === 'periodDays') {
      errors[field] = issue.message
    }

    return errors
  }, {})

export function useLoanParametersForm() {
  const navigate = useNavigate()
  const resetFormData = useApplicationFormStore(s => s.resetFormData)

  const [submitDialogStatus, setSubmitDialogStatus] = useState<SubmitDialogStatus | null>(null)
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [snapshot, setSnapshot] = useState<SubmittedSnapshot | null>(null)

  const {
    mutate: submitApplication,
    isPending: isSubmitting,
    error,
    reset: resetSubmitState,
  } = useMutation({ mutationFn: submitLoanApplication })

  const onSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault()
    resetSubmitState()

    const { amount, periodDays, firstName, lastName } = useApplicationFormStore.getState().formData

    const validationResult = loanParametersSchema.safeParse({ amount, periodDays })

    if (!validationResult.success) {
      setValidationErrors(getValidationErrors(validationResult.error.issues))
      return
    }

    setValidationErrors({})
    setSnapshot({ firstName, lastName, amount, periodDays })

    submitApplication(
      { firstName, lastName },
      {
        onSuccess: () => setSubmitDialogStatus('success'),
        onError: () => setSubmitDialogStatus('error'),
      },
    )
  }

  const clearValidationError = (field: keyof ValidationErrors) => {
    setValidationErrors(prev => {
      if (!prev[field]) return prev

      const next = { ...prev }
      delete next[field]

      return next
    })
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
    snapshot,
    validationErrors,
    clearValidationError,
    closeSubmitDialog,
    resetApplication,
  }
}
