import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ErrorIcon from '@mui/icons-material/Error'

import { en } from '@/shared/i18n/en'
import { FormStepActions } from '@/shared/ui/FormStepActions'
import { FormStepLayout } from '@/shared/ui/FormStepLayout'
import { ControlledSelectField } from '@/shared/form/ControlledSelectField'

import { ADDRESS_TEXT_FIELD_MAX_LENGTH } from '../model/address-work.constants'
import { useAddressWorkForm } from '../model/useAddressWorkForm'

const t = en.addressWork

export function AddressWorkForm() {
  const {
    control,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onBackClick,
    placeOfWorkOptions = [],
    isOptionsLoading,
    isOptionsError,
    refetchOptions,
  } = useAddressWorkForm()

  return (
    <FormStepLayout
      title={t.title}
      description={t.description}
      onSubmit={handleSubmit(onSubmit)}
      actions={
        <FormStepActions
          submitLabel={en.common.next}
          onBackClick={onBackClick}
          isSubmitDisabled={isOptionsLoading || isOptionsError}
        />
      }
    >
      <TextField
        label={t.address}
        autoComplete="street-address"
        error={Boolean(errors.address)}
        helperText={errors.address?.message ?? t.maxChars(ADDRESS_TEXT_FIELD_MAX_LENGTH)}
        fullWidth
        required
        slotProps={{ htmlInput: { maxLength: ADDRESS_TEXT_FIELD_MAX_LENGTH } }}
        {...register('address')}
      />

      {isOptionsError ? (
        <Box
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
            {t.failedToLoad}
          </Typography>
          <Button size="small" variant="contained" onClick={refetchOptions}>
            {t.retry}
          </Button>
        </Box>
      ) : (
        <ControlledSelectField
          control={control}
          name="placeOfWork"
          disabled={isOptionsLoading}
          helperText={isOptionsLoading ? t.loadingOptions : ' '}
          label={t.placeOfWork}
          options={placeOfWorkOptions}
          required
        />
      )}
    </FormStepLayout>
  )
}
