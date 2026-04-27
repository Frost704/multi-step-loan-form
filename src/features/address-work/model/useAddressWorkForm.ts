import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'
import type { StepFormWithBackResult } from '@/shared/types/form'

import { addressWorkSchema, type AddressWorkFormValues } from './address-work.schema'
import { usePlaceOfWorkOptions } from './usePlaceOfWorkOptions'

type UseAddressWorkFormResult = StepFormWithBackResult<AddressWorkFormValues> & {
  placeOfWorkOptions: ReturnType<typeof usePlaceOfWorkOptions>['data']
  isOptionsLoading: boolean
  isOptionsError: boolean
  refetchOptions: () => Promise<void>
}

export function useAddressWorkForm(): UseAddressWorkFormResult {
  const navigate = useNavigate()

  const placeOfWork = useApplicationFormStore(s => s.formData.placeOfWork)
  const address = useApplicationFormStore(s => s.formData.address)
  const updateFormData = useApplicationFormStore(s => s.updateFormData)

  const {
    data: placeOfWorkOptions,
    isLoading: isOptionsLoading,
    isError: isOptionsError,
    refetch,
  } = usePlaceOfWorkOptions()

  const refetchOptions = async () => {
    await refetch()
  }

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AddressWorkFormValues>({
    resolver: zodResolver(addressWorkSchema),
    values: {
      placeOfWork: (placeOfWorkOptions ?? []).some(o => o.value === placeOfWork) ? placeOfWork : '',
      address,
    },
    resetOptions: {
      keepDirtyValues: true,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<AddressWorkFormValues> = values => {
    updateFormData(values)
    navigate(APP_ROUTES.loanParameters)
  }

  const onBackClick = () => {
    const savedPlaceOfWork = isOptionsError ? '' : getValues().placeOfWork
    updateFormData({ ...getValues(), placeOfWork: savedPlaceOfWork })
    navigate(APP_ROUTES.personalInfo)
  }

  return {
    control,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onBackClick,
    placeOfWorkOptions,
    isOptionsLoading,
    isOptionsError,
    refetchOptions,
  }
}
