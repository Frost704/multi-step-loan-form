import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

type AppDialogIconProps = {
  iconColor: 'primary' | 'error' | 'success'
}

export const AppDialogContent = styled(DialogContent)({
  textAlign: 'center',
  paddingTop: 'calc(var(--space-10) + var(--space-2))',
  paddingBottom: 'var(--space-4)',
})

export const AppDialogActions = styled(DialogActions)({
  paddingInline: 'var(--space-8)',
  paddingTop: 'var(--space-4)',
  paddingBottom: 'var(--space-8)',
  justifyContent: 'center',
})

export const AppDialogIcon = styled('span', {
  shouldForwardProp: prop => prop !== 'iconColor',
})<AppDialogIconProps>(({ iconColor, theme }) => ({
  color: theme.palette[iconColor].main,
  display: 'inline-flex',

  '& svg': {
    fontSize: 'var(--space-10)',
  },
}))

export const AppDialogIconSurface = styled(Paper)({
  width: 'calc(var(--space-10) * 2)',
  height: 'calc(var(--space-10) * 2)',
  marginInline: 'auto',
  marginBottom: 'var(--space-6)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
})
