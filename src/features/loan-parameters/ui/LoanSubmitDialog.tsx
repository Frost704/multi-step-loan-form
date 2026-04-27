import CelebrationIcon from '@mui/icons-material/Celebration'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { en } from '@/shared/i18n/en'
import { AppDialog } from '@/shared/ui/AppDialog'

import type { SubmittedSnapshot } from '../model/useLoanParametersForm'

type LoanSubmitDialogProps = {
  status: 'success' | 'error' | null
  error: string | null
  snapshot: SubmittedSnapshot | null
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

const approvedSx = {
  color: 'success.main',
  fontWeight: 700,
}

const t = en.loanParameters.dialog

export function LoanSubmitDialog({
  status,
  error,
  snapshot,
  onSuccess,
  onClose,
}: LoanSubmitDialogProps) {
  const isSuccess = status === 'success'

  return (
    <AppDialog
      open={status !== null}
      title={isSuccess ? t.successTitle : t.errorTitle}
      onClose={() => (isSuccess ? onSuccess() : onClose())}
      description={
        isSuccess ? (
          snapshot !== null ? (
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
                {snapshot.lastName} {snapshot.firstName}
              </Box>
              {t.successLoanInfo}{' '}
              <Box component="span" sx={amountSx}>
                ${snapshot.amount}
              </Box>{' '}
              {t.successLoanTermConnector}{' '}
              <Box component="span" sx={amountSx}>
                {snapshot.periodDays} {en.loanParameters.days}
              </Box>{' '}
              {t.successLoanHasBeen}{' '}
              <Box component="span" sx={approvedSx}>
                {t.approved}
              </Box>
            </>
          ) : null
        ) : (
          (error ?? t.defaultError)
        )
      }
      icon={isSuccess ? <CelebrationIcon /> : <ErrorRoundedIcon />}
      iconColor={isSuccess ? 'primary' : 'error'}
      actions={
        <Button
          variant="contained"
          size="large"
          onClick={isSuccess ? onSuccess : onClose}
          fullWidth
        >
          {isSuccess ? t.successAction : t.errorAction}
        </Button>
      }
    />
  )
}
