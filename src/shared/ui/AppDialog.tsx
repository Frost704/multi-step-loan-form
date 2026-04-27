import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import type { ReactNode } from 'react'

import {
  AppDialogActions,
  AppDialogContent,
  AppDialogIcon,
  AppDialogIconSurface,
} from './AppDialog.styles'

type CloseReason = 'backdropClick' | 'escapeKeyDown'

type AppDialogProps = {
  open: boolean
  title: ReactNode
  onClose: (reason: CloseReason) => void
  description?: ReactNode
  actions?: ReactNode
  icon?: ReactNode
  iconColor?: 'primary' | 'error' | 'success'
}

export function AppDialog({
  open,
  title,
  onClose,
  description,
  actions,
  icon,
  iconColor = 'primary',
}: AppDialogProps) {
  return (
    <Dialog open={open} onClose={(_, reason) => onClose(reason)} maxWidth="xs" fullWidth>
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
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{ overflowWrap: 'break-word' }}
          >
            {description}
          </Typography>
        ) : null}
      </AppDialogContent>

      {actions ? <AppDialogActions>{actions}</AppDialogActions> : null}
    </Dialog>
  )
}
