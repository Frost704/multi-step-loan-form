import CelebrationIcon from '@mui/icons-material/Celebration'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useApplicationFormStore } from '@/entities/application'
import { en } from '@/shared/i18n/en'
import { AppDialog } from '@/shared/ui/AppDialog'

type LoanSubmitDialogProps = {
  status: 'success' | 'error' | null
  error: string | null
  onSuccess: () => void
  onClose: () => void
}

const amountSx = {
  fontWeight: 800,
  letterSpacing: '-0.03em',
  background: 'var(--gradient-primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const termSx = {
  ...amountSx,
}

const approvedSx = {
  color: 'success.main',
  fontWeight: 700,
}

const t = en.loanParameters.dialog

export function LoanSubmitDialog({ status, error, onSuccess, onClose }: LoanSubmitDialogProps) {
  const firstName = useApplicationFormStore(s => s.formData.firstName)
  const lastName = useApplicationFormStore(s => s.formData.lastName)
  const amount = useApplicationFormStore(s => s.formData.amount)
  const periodDays = useApplicationFormStore(s => s.formData.periodDays)

  const isSuccess = status === 'success'
  const handleAction = isSuccess ? onSuccess : onClose

  return (
    <AppDialog
      open={status !== null}
      title={isSuccess ? t.successTitle : t.errorTitle}
      onClose={handleAction}
      description={
        isSuccess ? (
          <>
            <Box
              component="span"
              sx={{
                display: 'block',
                color: 'text.primary',
                fontWeight: 700,
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
                mb: 0.5,
              }}
            >
              {lastName} {firstName}
            </Box>
            {t.successLoanInfo}{' '}
            <Box component="span" sx={amountSx}>
              ${amount}
            </Box>{' '}
            {t.successLoanTermConnector}{' '}
            <Box component="span" sx={termSx}>
              {periodDays} {en.loanParameters.days}
            </Box>{' '}
            {t.successLoanHasBeen}{' '}
            <Box component="span" sx={approvedSx}>
              {t.approved}
            </Box>
          </>
        ) : (
          (error ?? t.defaultError)
        )
      }
      icon={isSuccess ? <CelebrationIcon /> : <ErrorRoundedIcon />}
      iconColor={isSuccess ? 'primary' : 'error'}
      actions={
        <Button variant="contained" size="large" onClick={handleAction} fullWidth>
          {isSuccess ? t.successAction : t.errorAction}
        </Button>
      }
    />
  )
}
