import { APP_ROUTES } from '@/shared/constants/routes'
import { RouteFallback } from '@/shared/ui/RouteFallback'

import { lazy, Suspense, type ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import {
  isAddressWorkComplete,
  isPersonalInfoComplete,
  useApplicationFormStore,
} from '@/entities/application'
import type { LoanApplicationDraft } from '@/entities/application'
import { Layout } from '@/widgets/loan-application-layout/ui/Layout'

const PersonalInfoPage = lazy(() => import('@/pages/PersonalInfoPage'))
const AddressWorkPage = lazy(() => import('@/pages/AddressWorkPage'))
const LoanParametersPage = lazy(() => import('@/pages/LoanParametersPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function RequireStep({
  select,
  redirectTo,
  children,
}: {
  select: (d: LoanApplicationDraft) => boolean
  redirectTo: string
  children: ReactNode
}) {
  const isReady = useApplicationFormStore(state => select(state.formData))
  return isReady ? children : <Navigate to={redirectTo} replace />
}

export function AppRouter() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path={APP_ROUTES.root} element={<Layout />}>
          <Route index element={<Navigate to={APP_ROUTES.personalInfo} replace />} />
          <Route path={APP_ROUTES.personalInfo} element={<PersonalInfoPage />} />
          <Route
            path={APP_ROUTES.addressWork}
            element={
              <RequireStep select={isPersonalInfoComplete} redirectTo={APP_ROUTES.personalInfo}>
                <AddressWorkPage />
              </RequireStep>
            }
          />
          <Route
            path={APP_ROUTES.loanParameters}
            element={
              <RequireStep select={isAddressWorkComplete} redirectTo={APP_ROUTES.addressWork}>
                <LoanParametersPage />
              </RequireStep>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
