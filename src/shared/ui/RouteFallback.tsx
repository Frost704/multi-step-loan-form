import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { en } from '@/shared/i18n/en'

export function RouteFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        {en.common.loading}
      </Typography>
    </Box>
  )
}
