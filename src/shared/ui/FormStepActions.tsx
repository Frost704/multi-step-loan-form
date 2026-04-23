import Button from '@mui/material/Button'
import type { ReactNode } from 'react'

import { FormStepActionsRoot } from './FormStepActions.styles'

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
    <FormStepActionsRoot hasBackAction={Boolean(onBackClick)}>
      {onBackClick ? (
        <Button type="button" variant="outlined" onClick={onBackClick} disabled={isBackDisabled}>
          {backLabel}
        </Button>
      ) : null}

      <Button type="submit" variant="contained" disabled={isSubmitDisabled}>
        {submitLabel}
      </Button>
    </FormStepActionsRoot>
  )
}
