import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <Container>
      <Box sx={{ mx: 'auto', maxWidth: 640 }}>
        <Outlet />
      </Box>
    </Container>
  )
}
