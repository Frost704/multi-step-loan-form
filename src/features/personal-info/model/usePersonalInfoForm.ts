import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useApplicationFormStore } from '@/entities/application'
import { APP_ROUTES } from '@/shared/constants/routes'
import type { StepFormResult } from '@/shared/types/form'

import { personalInfoSchema, type PersonalInfoFormValues } from './personal-info.schema'

export function usePersonalInfoForm(): StepFormResult<PersonalInfoFormValues> {
  const navigate = useNavigate()

  const { formData } = useApplicationFormStore.getState()
  const updateFormData = useApplicationFormStore(state => state.updateFormData)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormValues>({
    // React Hook Form keeps field state lightweight; Zod provides typed validation.
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      phone: formData.phone,
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender ?? undefined,
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<PersonalInfoFormValues> = values => {
    updateFormData(values)
    navigate(APP_ROUTES.addressWork)
  }

  return {
    control,
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
