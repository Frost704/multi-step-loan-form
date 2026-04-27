import TextField from '@mui/material/TextField'

import {
  GENDER_OPTIONS,
  NAME_TEXT_FIELD_MAX_LENGTH,
  usePersonalInfoForm,
  PhoneField,
} from '@/features/personal-info'
import { ControlledSelectField } from '@/shared/form/ControlledSelectField'
import { en } from '@/shared/i18n/en'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'

const t = en.personalInfo

export default function PersonalInfoPage() {
  const { control, register, handleSubmit, errors, onSubmit } = usePersonalInfoForm()

  return (
    <FormStepLayout
      title={t.title}
      description={t.description}
      onSubmit={handleSubmit(onSubmit)}
      actions={<FormStepActions submitLabel={en.common.next} />}
    >
      <TextField
        label={t.firstName}
        autoComplete="given-name"
        error={Boolean(errors.firstName)}
        helperText={errors.firstName?.message ?? t.maxChars(NAME_TEXT_FIELD_MAX_LENGTH)}
        fullWidth
        required
        slotProps={{ htmlInput: { maxLength: NAME_TEXT_FIELD_MAX_LENGTH } }}
        {...register('firstName')}
      />

      <TextField
        label={t.lastName}
        autoComplete="family-name"
        error={Boolean(errors.lastName)}
        helperText={errors.lastName?.message ?? t.maxChars(NAME_TEXT_FIELD_MAX_LENGTH)}
        fullWidth
        required
        slotProps={{ htmlInput: { maxLength: NAME_TEXT_FIELD_MAX_LENGTH } }}
        {...register('lastName')}
      />

      <PhoneField
        control={control}
        name="phone"
        label={t.phone}
        required
        format="#### ### ###"
        placeholder="0XXX XXX XXX"
      />

      <ControlledSelectField
        control={control}
        name="gender"
        label={t.gender}
        options={GENDER_OPTIONS}
        autoComplete="sex"
        required
      />
    </FormStepLayout>
  )
}
