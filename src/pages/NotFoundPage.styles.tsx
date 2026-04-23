import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const NotFoundRoot = styled(Box)({
  textAlign: 'center',
  paddingBlock: 'var(--space-14)',

  '& .not-found__description': {
    marginBottom: 'var(--space-8)',
  },
})
