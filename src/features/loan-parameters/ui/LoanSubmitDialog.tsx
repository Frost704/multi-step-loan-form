import CelebrationIcon from '@mui/icons-material/Celebration'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { AppDialog } from '@/shared/ui/AppDialog'

type LoanSubmitDialogProps = {
  status: 'success' | 'error' | null
  error: string | null
  firstName: string
  lastName: string
  amount: number
  periodDays: number
  onSuccess: () => void
  onClose: () => void
}

export function LoanSubmitDialog({
  status,
  error,
  firstName,
  lastName,
  amount,
  periodDays,
  onSuccess,
  onClose,
}: LoanSubmitDialogProps) {
  const isSuccess = status === 'success'
  const handleAction = isSuccess ? onSuccess : onClose

  return (
    <AppDialog
      open={status !== null}
      title={isSuccess ? 'Congratulations!' : 'Submission failed'}
      onClose={handleAction}
      description={
        isSuccess
          ? `${lastName} ${firstName}, your loan has been approved`
          : (error ?? 'Please try again later')
      }
      icon={isSuccess ? <CelebrationIcon /> : <ErrorRoundedIcon />}
      iconColor={isSuccess ? 'primary' : 'error'}
      actions={
        <Button variant="contained" size="large" onClick={handleAction} fullWidth>
          {isSuccess ? 'Great!' : 'Try again'}
        </Button>
      }
    >
      {isSuccess ? (
        <Typography variant="h3" gutterBottom>
          ${amount} for {periodDays} days
        </Typography>
      ) : null}
    </AppDialog>
  )
}
