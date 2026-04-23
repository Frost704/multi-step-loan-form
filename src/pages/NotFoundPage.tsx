import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { APP_ROUTES } from '@/shared/constants/routes'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{ textAlign: 'center', paddingBlock: 'var(--space-14)' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page not found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 'var(--space-8)' }}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate(APP_ROUTES.personalInfo)}>
        Go to application
      </Button>
    </Box>
  )
}
