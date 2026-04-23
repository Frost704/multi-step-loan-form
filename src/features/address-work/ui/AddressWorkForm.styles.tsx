import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const StatusRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-2)',
  minHeight: 'var(--space-8)',
})

export const EmptySelectPreview = styled(Box)(({ theme }) => ({
  height: 56,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.disabledBackground,
}))

export const RetryButton = styled(Button)({
  minWidth: 'auto',
  paddingInline: 'var(--space-3)',
  paddingBlock: 'var(--space-2)',
  flexShrink: 0,
})
