import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const LoanSummaryCard = styled(Paper)(({ theme }) => ({
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-lg)',
  background: 'var(--gradient-primary)',
  color: theme.palette.primary.contrastText,
  boxShadow: 'var(--shadow-elegant)',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 100% 0%, hsl(var(--accent) / 0.4), transparent 60%)',
  },
}))

export const LoanSummaryContent = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  gap: 'var(--space-4)',
  flexWrap: 'wrap',
})

export const LoanSummaryApplicant = styled('div')({})

export const LoanSummaryAside = styled('div')({
  textAlign: 'right',
})

export const LoanSummaryLabel = styled(Typography)({
  color: 'hsl(var(--primary-foreground-muted))',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
})

export const LoanSummaryBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
}))

export const LoanSummaryValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 'var(--font-size-xl)',
  fontWeight: 800,
}))

export const LoanSummaryMeta = styled('span')({
  fontWeight: 500,
  opacity: 0.8,
})
