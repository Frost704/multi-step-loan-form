import { APP_ROUTES } from '@/shared/constants/routes'
import { RouteFallback } from '@/shared/ui/RouteFallback'
import { Layout } from '@/shared/ui/layout'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const PersonalInfoPage = lazy(() => import('@/pages/PersonalInfoPage'))
const AddressWorkPage = lazy(() => import('@/pages/AddressWorkPage'))
const LoanParametersPage = lazy(() => import('@/pages/LoanParametersPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path={APP_ROUTES.root} element={<Layout />}>
          <Route index element={<Navigate to={APP_ROUTES.personalInfo} replace />} />
          <Route path={APP_ROUTES.personalInfo} element={<PersonalInfoPage />} />
          <Route path={APP_ROUTES.addressWork} element={<AddressWorkPage />} />
          <Route path={APP_ROUTES.loanParameters} element={<LoanParametersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
