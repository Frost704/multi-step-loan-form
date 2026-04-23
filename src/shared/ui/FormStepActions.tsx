import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { ReactNode } from 'react'

type FormStepActionsProps = {
  submitLabel: ReactNode
  backLabel?: ReactNode
  onBackClick?: () => void
  isSubmitDisabled?: boolean
  isBackDisabled?: boolean
}

export function FormStepActions({
  submitLabel,
  backLabel = 'Back',
  onBackClick,
  isSubmitDisabled = false,
  isBackDisabled = false,
}: FormStepActionsProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: onBackClick ? 'space-between' : 'flex-end',
        gap: 'var(--space-4)',
      }}
    >
      {onBackClick ? (
        <Button type="button" variant="outlined" onClick={onBackClick} disabled={isBackDisabled}>
          {backLabel}
        </Button>
      ) : null}

      <Button type="submit" variant="contained" disabled={isSubmitDisabled}>
        {submitLabel}
      </Button>
    </Box>
  )
}
