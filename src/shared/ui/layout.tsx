import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { LayoutContent } from './layout.styles'

export function Layout() {
  return (
    <Container>
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </Container>
  )
}
