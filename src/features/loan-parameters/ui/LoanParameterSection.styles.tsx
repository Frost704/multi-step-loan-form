import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const PresetButton = styled('button')({
  padding: '3px 10px',
  height: 26,
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 600,
  lineHeight: 1,
  cursor: 'pointer',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--secondary))',
  color: 'hsl(var(--foreground))',
  transition: 'background .15s ease, color .15s ease, border-color .15s ease',

  '&:hover': {
    background: 'var(--gradient-primary)',
    color: 'hsl(var(--primary-foreground))',
    borderColor: 'transparent',
  },

  '&[data-active="true"]': {
    background: 'var(--gradient-primary)',
    color: 'hsl(var(--primary-foreground))',
    borderColor: 'transparent',
  },

  '&[data-active="true"]:hover': {
    filter: 'brightness(1.08)',
  },
})

export const LoanParameterCard = styled('div')({
  padding: '12px 16px',
  borderRadius: 'var(--radius-lg)',
  background: 'hsl(var(--card))',
  boxShadow: 'var(--shadow-soft)',
})

export const LoanParameterHeader = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  marginBottom: 2,
})

export const LoanParameterLabel = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.08em',
})

export const LoanParameterValue = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
  marginBottom: 4,
  background: 'var(--gradient-primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const LoanParameterUnit = styled('span')({
  fontSize: '1rem',
  fontWeight: 600,
})

export const LoanPresetList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-2)',
  marginTop: 'var(--space-2)',
})
