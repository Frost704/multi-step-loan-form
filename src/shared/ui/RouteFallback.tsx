import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function RouteFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  )
}
