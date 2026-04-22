import { Button, Card } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/shared/constants/routes'

export default function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoToApplicationClick = () => {
    navigate(APP_ROUTES.personalInfo)
  }

  return (
    <Card className="flex text-center">
      <h1 className="h3 mb-3">404 — Page not found</h1>
      <p className="text-body-secondary mb-4">The page you are looking for does not exist.</p>

      <Button variant="contained" onClick={handleGoToApplicationClick}>
        Go to application
      </Button>
    </Card>
  )
}
