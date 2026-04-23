import { zodResolver } from '@hookform/resolvers/zod'
import {
  type Control,
  type FieldErrors,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormRegister,
  useForm,
} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { APP_ROUTES } from '@/shared/constants/routes'

import { useApplicationFormStore } from '@/entities/application'
import {
  personalInfoSchema,
  type PersonalInfoFormValues,
} from '@/features/personal-info/model/personal-info.schema'

type UsePersonalInfoFormResult = {
  control: Control<PersonalInfoFormValues>
  register: UseFormRegister<PersonalInfoFormValues>
  handleSubmit: UseFormHandleSubmit<PersonalInfoFormValues>
  errors: FieldErrors<PersonalInfoFormValues>
  onSubmit: SubmitHandler<PersonalInfoFormValues>
}

export function usePersonalInfoForm(): UsePersonalInfoFormResult {
  const navigate = useNavigate()

  const formData = useApplicationFormStore(state => state.formData)
  const updateFormData = useApplicationFormStore(state => state.updateFormData)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormValues>({
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
