import TextField from '@mui/material/TextField'

import { PhoneField } from './PhoneField'
import { SelectField } from '@/shared/ui/SelectField'
import {
  GENDER_OPTIONS,
  NAME_TEXT_FIELD_MAX_LENGTH,
} from '@/features/personal-info/model/personal-info.constants'
import { usePersonalInfoForm } from '@/features/personal-info/model/usePersonalInfoForm'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'
import { FormStepActions } from '@/shared/ui/FormStepActions'

export function PersonalInfoForm() {
  const { control, register, handleSubmit, errors, onSubmit } = usePersonalInfoForm()
  return (
    <FormStepLayout
      title="Personal information"
      description="Enter your personal details to continue the application."
      onSubmit={handleSubmit(onSubmit)}
      actions={<FormStepActions submitLabel="Next" />}
    >
      <TextField
        label="First name"
        autoComplete="given-name"
        error={Boolean(errors.firstName)}
        helperText={errors.firstName?.message ?? `Maximum ${NAME_TEXT_FIELD_MAX_LENGTH} characters`}
        fullWidth
        required
        slotProps={{
          htmlInput: {
            maxLength: NAME_TEXT_FIELD_MAX_LENGTH,
          },
        }}
        {...register('firstName')}
      />

      <TextField
        label="Last name"
        autoComplete="family-name"
        error={Boolean(errors.lastName)}
        helperText={errors.lastName?.message ?? `Maximum ${NAME_TEXT_FIELD_MAX_LENGTH} characters`}
        fullWidth
        required
        slotProps={{
          htmlInput: {
            maxLength: NAME_TEXT_FIELD_MAX_LENGTH,
          },
        }}
        {...register('lastName')}
      />

      <PhoneField
        control={control}
        name="phone"
        label="Phone"
        required
        format="#### ### ###"
        placeholder="0XXX XXX XXX"
      />

      <SelectField
        control={control}
        name="gender"
        label="Gender"
        options={GENDER_OPTIONS}
        autoComplete="sex"
        required
      />
    </FormStepLayout>
  )
}
