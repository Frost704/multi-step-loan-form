import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import {
  useApplicationFormStore,
  LOAN_AMOUNT_MIN,
  LOAN_AMOUNT_MAX,
  LOAN_TERM_MIN,
  LOAN_TERM_MAX,
} from '@/entities/application'
import { isInRange } from '@/shared/lib/isInRange'
import { formatPersonName } from '@/shared/lib/formatPersonName'
import { en } from '@/shared/i18n/en'
import { applicantNameSx, applicantSx, labelSx, Card } from './LoanApplicationSummary.styles'

export function LoanApplicationSummary() {
  const amount = useApplicationFormStore(s => s.formData.amount)
  const periodDays = useApplicationFormStore(s => s.formData.periodDays)
  const firstName = useApplicationFormStore(s => s.formData.firstName)
  const lastName = useApplicationFormStore(s => s.formData.lastName)
  const { fullName, displayName } = formatPersonName(firstName, lastName)

  const safeAmount = isInRange(amount, LOAN_AMOUNT_MIN, LOAN_AMOUNT_MAX) ? amount : LOAN_AMOUNT_MIN
  const safePeriodDays =
    Number.isInteger(periodDays) && isInRange(periodDays, LOAN_TERM_MIN, LOAN_TERM_MAX)
      ? periodDays
      : LOAN_TERM_MIN

  return (
    <Card>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
          minWidth: 0,
        }}
      >
        <Box sx={applicantSx}>
          <Typography sx={labelSx}>{en.loanParameters.applicant}</Typography>
          <Typography sx={applicantNameSx} title={fullName}>
            {displayName}
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'right', minWidth: 0, flexShrink: 0 }}>
          <Typography sx={labelSx}>{en.loanParameters.summary}</Typography>
          <Typography
            sx={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 800,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            ${safeAmount}
            {' · '}
            <Box
              component="span"
              sx={{ fontWeight: 500, opacity: 0.8, fontVariantNumeric: 'tabular-nums' }}
            >
              {safePeriodDays} {en.loanParameters.daysAbbr}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
