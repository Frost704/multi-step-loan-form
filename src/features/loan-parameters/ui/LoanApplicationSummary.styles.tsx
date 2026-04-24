import { Paper, styled } from '@mui/material'

export const Card = styled(Paper)({
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

export const labelSx = {
  color: 'hsl(var(--primary-foreground-muted))',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
} as const

export const applicantSx = {
  minWidth: 0,
  flex: '1 1 12rem',
} as const

export const applicantNameSx = {
  fontWeight: 700,
  maxWidth: '100%',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  lineHeight: 1.25,
} as const
