import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { PhoneField } from './PhoneField'
import { SelectField } from '@/features/personal-info/ui/SelectField'
import {
  GENDER_OPTIONS,
  NAME_TEXT_FIELD_MAX_LENGTH,
  PHONE_FIELD_MAX_LENGTH,
} from '@/features/personal-info/model/personal-info.constants'
import { usePersonalInfoForm } from '@/features/personal-info/model/usePersonalInfoForm'

export function PersonalInfoForm() {
  const { control, register, handleSubmit, errors, onSubmit } = usePersonalInfoForm()
  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Personal information
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter your personal details to continue the application.
          </Typography>
        </Box>

        <TextField
          label="First name"
          autoComplete="given-name"
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName?.message ?? `Maximum ${NAME_TEXT_FIELD_MAX_LENGTH} characters`
          }
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
          helperText={
            errors.lastName?.message ?? `Maximum ${NAME_TEXT_FIELD_MAX_LENGTH} characters`
          }
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
          maxLength={PHONE_FIELD_MAX_LENGTH}
        />

        <SelectField
          control={control}
          name="gender"
          label="Gender"
          options={GENDER_OPTIONS}
          autoComplete="sex"
          required
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
