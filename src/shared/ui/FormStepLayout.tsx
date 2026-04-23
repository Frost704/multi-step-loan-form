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
    <Box component="form" noValidate onSubmit={onSubmit}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </Box>

        {children}

        {actions}
      </Stack>
    </Box>
  )
}
