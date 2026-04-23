import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export const PresetButton = styled('button')(({ theme }) => ({
  padding: '5px 12px',
  height: 32,
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'inherit',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 600,
  lineHeight: 1,
  cursor: 'pointer',
  border: `1px solid ${theme.palette.divider}`,
  background: 'hsl(var(--secondary))',
  color: 'hsl(var(--foreground))',
  transition: 'background-color .2s ease, color .2s ease, border-color .2s ease, filter .2s ease',

  '&:hover': {
    filter: 'brightness(0.97)',
  },

  '&[data-active="true"]': {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    borderColor: 'hsl(var(--primary))',
  },

  '&[data-active="true"]:hover': {
    filter: 'brightness(1.08)',
  },
}))

export const LoanParameterCard = styled(Paper)(({ theme }) => ({
  padding: 'var(--space-5)',
  borderRadius: 'var(--radius-lg)',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',

  [theme.breakpoints.up('sm')]: {
    padding: 'var(--space-7)',
  },
}))

export const LoanParameterHeader = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  marginBottom: 'var(--space-2)',
})

export const LoanParameterLabel = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.08em',
})

export const LoanParameterValue = styled(Typography)({
  fontSize: 'var(--font-size-4xl)',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: 'var(--space-4)',
})

export const LoanParameterUnit = styled('span')({
  fontSize: 'var(--font-size-xl)',
  fontWeight: 600,
})

export const LoanPresetList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-3)',
  marginTop: 'var(--space-8)',
})
