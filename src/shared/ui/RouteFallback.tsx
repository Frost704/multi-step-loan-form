import Typography from '@mui/material/Typography'

import { RouteFallbackRoot } from './RouteFallback.styles'

export function RouteFallback() {
  return (
    <RouteFallbackRoot>
      <Typography variant="body2" color="text.secondary">
        Loading...
      </Typography>
    </RouteFallbackRoot>
  )
}
