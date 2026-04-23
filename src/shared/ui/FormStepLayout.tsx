import { Fade } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { ReactNode, SubmitEventHandler } from 'react'

type FormStepLayoutProps = {
  title: string
  description: string
  children: ReactNode
  actions: ReactNode
  onSubmit: SubmitEventHandler<HTMLFormElement>
}

export function FormStepLayout({
  title,
  description,
  children,
  actions,
  onSubmit,
}: FormStepLayoutProps) {
  return (
    <Fade in timeout={300} mountOnEnter unmountOnExit>
      <Box
        component="form"
        noValidate
        onSubmit={onSubmit}
        sx={{ display: 'grid', gap: 'var(--space-4)' }}
      >
        <Box component="div">
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
          <Typography variant="body1" component="h2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Stack spacing={2}>
          {children}
          {actions}
        </Stack>
      </Box>
    </Fade>
  )
}
