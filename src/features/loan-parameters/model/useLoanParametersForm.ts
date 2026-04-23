import { zodResolver } from '@hookform/resolvers/zod'
import {
  type Control,
  type SubmitHandler,
  type UseFormHandleSubmit,
  useForm,
} from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'

import { loanParametersSchema, type LoanParametersFormValues } from './loan-parameters.schema'
import { useSubmitLoanApplication } from './useSubmitLoanApplication'

type SubmitDialogStatus = 'success' | 'error'

type UseLoanParametersFormResult = {
  control: Control<LoanParametersFormValues>
  handleSubmit: UseFormHandleSubmit<LoanParametersFormValues>
  onSubmit: SubmitHandler<LoanParametersFormValues>
  onBackClick: () => void
  isSubmitting: boolean
  submitError: string | null
  submitDialogStatus: SubmitDialogStatus | null
  closeSubmitDialog: () => void
  resetApplication: () => void
  firstName: string
  lastName: string
  amount: number
  periodDays: number
}

export function useLoanParametersForm(): UseLoanParametersFormResult {
  const navigate = useNavigate()

  const formData = useApplicationFormStore(state => state.formData)
  const updateFormData = useApplicationFormStore(state => state.updateFormData)
  const resetFormData = useApplicationFormStore(state => state.resetFormData)

  const [submitDialogStatus, setSubmitDialogStatus] = useState<SubmitDialogStatus | null>(null)

  const {
    mutate: submitApplication,
    isPending: isSubmitting,
    error,
    reset: resetSubmitState,
  } = useSubmitLoanApplication()

  const { control, handleSubmit, getValues } = useForm<LoanParametersFormValues>({
    resolver: zodResolver(loanParametersSchema),
    defaultValues: {
      amount: formData.amount,
      periodDays: formData.periodDays,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<LoanParametersFormValues> = values => {
    updateFormData(values)
    resetSubmitState()

    submitApplication(
      { firstName: formData.firstName, lastName: formData.lastName },
      {
        onSuccess: () => setSubmitDialogStatus('success'),
        onError: () => setSubmitDialogStatus('error'),
      },
    )
  }

  const onBackClick = () => {
    updateFormData(getValues())
    navigate(APP_ROUTES.addressWork)
  }

  const closeSubmitDialog = () => setSubmitDialogStatus(null)

  const resetApplication = () => {
    resetFormData()
    resetSubmitState()
    closeSubmitDialog()
    navigate(APP_ROUTES.root, { replace: true })
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    onBackClick,
    isSubmitting,
    submitError: error instanceof Error ? error.message : null,
    submitDialogStatus,
    closeSubmitDialog,
    resetApplication,
    firstName: formData.firstName,
    lastName: formData.lastName,
    amount: formData.amount,
    periodDays: formData.periodDays,
  }
}
