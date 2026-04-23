import Skeleton from '@mui/material/Skeleton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ErrorIcon from '@mui/icons-material/Error'

import { SelectField } from '@/shared/ui/SelectField'

import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from '../model/address-work.constants'
import { useAddressWorkForm } from '../model/useAddressWorkForm'
import { usePlaceOfWorkOptions } from '../model/usePlaceOfWorkOptions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { Box, Button } from '@mui/material'

export function AddressWorkForm() {
  const { control, register, handleSubmit, errors, onSubmit, onBackClick } = useAddressWorkForm()

  const { data: placeOfWorkOptions = [], isLoading, isError, refetch } = usePlaceOfWorkOptions()

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
      <TextField
        label="Address"
        autoComplete="street-address"
        error={Boolean(errors.address)}
        helperText={
          errors.address?.message ?? `Maximum ${ADDRESS_TEXT_FIELD_MAX_LENGTH} characters`
        }
        fullWidth
        required
        slotProps={{
          htmlInput: {
            maxLength: ADDRESS_TEXT_FIELD_MAX_LENGTH,
          },
        }}
        {...register('address')}
      />
      {isLoading ? (
        <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} height={78}></Skeleton>
      ) : isError ? (
        <Box
          component="div"
          sx={{
            display: 'flex',
            gap: 'var(--space-2)',
            alignItems: 'center',
            justifyContent: 'center',
            height: '78px',
          }}
        >
          <ErrorIcon color="error" />
          <Typography variant="body1" color="error">
            Failed to load
          </Typography>
          <Button size="small" variant="contained" onClick={() => refetch()}>
            Retry
          </Button>
        </Box>
      ) : (
        <SelectField
          control={control}
          name="placeOfWork"
          label="Place of work"
          options={placeOfWorkOptions}
          required
        />
      )}
    </FormStepLayout>
  )
}
