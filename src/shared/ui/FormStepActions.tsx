import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type FormStepActionsProps = {
  submitLabel: string
  onBackClick?: () => void
  isSubmitDisabled?: boolean
  isBackDisabled?: boolean
}

export function FormStepActions({
  submitLabel,
  onBackClick,
  isSubmitDisabled = false,
  isBackDisabled = false,
}: FormStepActionsProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: onBackClick ? 'space-between' : 'flex-end' }}>
      {onBackClick && (
        <Button type="button" variant="outlined" onClick={onBackClick} disabled={isBackDisabled}>
          Back
        </Button>
      )}

      <Button type="submit" variant="contained" disabled={isSubmitDisabled}>
        {submitLabel}
      </Button>
    </Box>
  )
}
