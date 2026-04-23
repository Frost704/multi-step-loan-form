import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

type FormStepActionsRootProps = {
  hasBackAction: boolean
}

export const FormStepActionsRoot = styled(Box, {
  shouldForwardProp: prop => prop !== 'hasBackAction',
})<FormStepActionsRootProps>(({ hasBackAction }) => ({
  display: 'flex',
  justifyContent: hasBackAction ? 'space-between' : 'flex-end',
  gap: 'var(--space-4)',
}))
