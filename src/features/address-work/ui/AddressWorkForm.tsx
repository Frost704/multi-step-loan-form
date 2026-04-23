import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ErrorIcon from '@mui/icons-material/Error'

import { SelectField } from '@/shared/ui/SelectField'

import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from '../model/address-work.constants'
import { useAddressWorkForm } from '../model/useAddressWorkForm'
import { usePlaceOfWorkOptions } from '../model/usePlaceOfWorkOptions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'
import { FormStepActions } from '@/shared/ui/FormStepActions'

export function AddressWorkForm() {
  const { control, register, handleSubmit, errors, onSubmit, onBackClick } = useAddressWorkForm()

  const { data: placeOfWorkOptions = [], isLoading, isError } = usePlaceOfWorkOptions()

  return (
    <FormStepLayout
      title="Address and place of work"
      description="Enter your address and select your place of work."
      onSubmit={handleSubmit(onSubmit)}
      actions={
        <FormStepActions
          submitLabel="Next"
          onBackClick={onBackClick}
          isSubmitDisabled={isLoading || isError}
        />
      }
    >
      {isLoading ? (
        <Stack spacing={1}>
          <Skeleton variant="rounded" animation="wave" height={56} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={16} />
            <Typography variant="body2" color="text.secondary">
              Loading place of work options...
            </Typography>
          </Box>
        </Stack>
      ) : isError ? (
        <Stack spacing={1}>
          <Box
            sx={{
              height: 56,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              bgcolor: 'action.disabledBackground',
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ErrorIcon color="error" />
            <Typography variant="body2" color="error">
              Failed to load place of work options
            </Typography>
          </Box>
        </Stack>
      ) : (
        <SelectField
          control={control}
          name="placeOfWork"
          label="Place of work"
          options={placeOfWorkOptions}
          required
        />
      )}

      <TextField
        label="Address"
        autoComplete="street-address"
        error={Boolean(errors.address)}
        helperText={errors.address?.message ?? 'Maximum 100 characters'}
        fullWidth
        required
        slotProps={{
          htmlInput: {
            maxLength: ADDRESS_TEXT_FIELD_MAX_LENGTH,
          },
        }}
        {...register('address')}
      />
    </FormStepLayout>
  )
}
