import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import {
  AppDialogActions,
  AppDialogContent,
  AppDialogIcon,
  AppDialogIconSurface,
} from './AppDialog.styles'

type AppDialogProps = {
  open: boolean
  title: ReactNode
  onClose: () => void
  description?: ReactNode
  children?: ReactNode
  actions?: ReactNode
  icon?: ReactNode
  iconColor?: 'primary' | 'error' | 'success'
}

export function AppDialog({
  open,
  title,
  onClose,
  description,
  children,
  actions,
  icon,
  iconColor = 'primary',
}: AppDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <AppDialogContent>
        {icon ? (
          <AppDialogIconSurface>
            <AppDialogIcon iconColor={iconColor}>{icon}</AppDialogIcon>
          </AppDialogIconSurface>
        ) : null}

        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        {description ? (
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {description}
          </Typography>
        ) : null}

        {children}
      </AppDialogContent>

      {actions ? <AppDialogActions>{actions}</AppDialogActions> : null}
    </Dialog>
  )
}
