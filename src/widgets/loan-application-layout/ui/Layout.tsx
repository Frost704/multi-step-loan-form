import { Outlet } from 'react-router-dom'

import { FormArea, FormColumn, LayoutGrid } from './styles'
import { LoanApplicationMobileHeader } from './MobileHeader'
import { LoanApplicationPromoRail } from './PromoRail'

export function Layout() {
  return (
    <LayoutGrid>
      <LoanApplicationPromoRail />
      <FormColumn>
        <LoanApplicationMobileHeader />
        <FormArea>
          <Outlet />
        </FormArea>
      </FormColumn>
    </LayoutGrid>
  )
}
