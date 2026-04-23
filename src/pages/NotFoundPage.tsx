import { Box, Button, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/shared/constants/routes'

export default function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoToApplicationClick = () => {
    navigate(APP_ROUTES.personalInfo)
  }

  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page not found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={handleGoToApplicationClick}>
        Go to application
      </Button>
    </Box>
  )
}
