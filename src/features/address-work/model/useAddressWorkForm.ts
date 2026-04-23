import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'
import type { StepFormWithBackResult } from '@/shared/types/form'

import { addressWorkSchema, type AddressWorkFormValues } from './address-work.schema'

export function useAddressWorkForm(): StepFormWithBackResult<AddressWorkFormValues> {
  const navigate = useNavigate()

  const formData = useApplicationFormStore(state => state.formData)
  const updateFormData = useApplicationFormStore(state => state.updateFormData)

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AddressWorkFormValues>({
    resolver: zodResolver(addressWorkSchema),
    defaultValues: {
      placeOfWork: formData.placeOfWork,
      address: formData.address,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<AddressWorkFormValues> = values => {
    updateFormData(values)
    navigate(APP_ROUTES.loanParameters)
  }

  const onBackClick = () => {
    updateFormData(getValues())
    navigate(APP_ROUTES.personalInfo)
  }

  return {
    control,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onBackClick,
  }
}
