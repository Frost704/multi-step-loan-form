import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { APP_ROUTES } from '@/shared/constants/routes'
import { en } from '@/shared/i18n/en'

const t = en.notFound

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{ textAlign: 'center', paddingBlock: 'var(--space-14)' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {t.code}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {t.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 'var(--space-8)' }}>
        {t.description}
      </Typography>
      <Button variant="contained" onClick={() => navigate(APP_ROUTES.personalInfo)}>
        {t.cta}
      </Button>
    </Box>
  )
}
