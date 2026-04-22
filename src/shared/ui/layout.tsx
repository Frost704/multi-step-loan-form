import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <Container className="py-5">
      <div className="mx-auto" style={{ maxWidth: 640 }}>
        <Outlet />
      </div>
    </Container>
  )
}
