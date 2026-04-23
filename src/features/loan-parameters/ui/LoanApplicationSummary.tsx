import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { useApplicationFormStore } from '@/entities/application'

const Card = styled(Paper)({
  padding: '12px 16px',
  borderRadius: 'var(--radius-lg)',
  background: 'var(--gradient-primary)',
  color: 'hsl(var(--primary-foreground))',
  boxShadow: 'var(--shadow-elegant)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 100% 0%, hsl(var(--accent) / 0.4), transparent 60%)',
  },
})

const labelSx = {
  color: 'hsl(var(--primary-foreground-muted))',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
} as const

export function LoanApplicationSummary() {
  const amount = useApplicationFormStore(s => s.formData.amount)
  const periodDays = useApplicationFormStore(s => s.formData.periodDays)
  const firstName = useApplicationFormStore(s => s.formData.firstName)
  const lastName = useApplicationFormStore(s => s.formData.lastName)

  return (
    <Card>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <Typography sx={labelSx}>Applicant</Typography>
          <Typography sx={{ fontWeight: 700 }}>
            {firstName} {lastName}
          </Typography>
        </div>

        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={labelSx}>Summary</Typography>
          <Typography sx={{ fontSize: 'var(--font-size-lg)', fontWeight: 800 }}>
            ${amount}{' '}
            <Box component="span" sx={{ fontWeight: 500, opacity: 0.8 }}>
              · {periodDays} d
            </Box>
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
