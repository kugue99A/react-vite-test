import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { MainLayout } from '@/components/common'
import { Spinner } from '@/components/ui'
import { lazyImport } from '@/utils/lazyImport'

const { UsersRoutes } = lazyImport(() => import('@/features/users'), 'UsersRoutes')
const { KartesRoutes } = lazyImport(() => import('@/features/kartes'), 'KartesRoutes')
const { CourcesRoutes } = lazyImport(() => import('@/features/cources'), 'CourcesRoutes')
const { RecordsRoutes } = lazyImport(() => import('@/features/records'), 'RecordsRoutes')
const { DiscountsRoutes } = lazyImport(() => import('@/features/discounts'), 'DiscountsRoutes')

const App = () => {
  return (
    <>
      <MainLayout>
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
    </>
  )
}

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'users/*',
        element: <UsersRoutes />,
      },
      {
        path: 'discounts/*',
        element: <DiscountsRoutes />,
      },
      {
        path: 'records',
        element: <RecordsRoutes />,
      },
      {
        path: 'kartes/*',
        element: <KartesRoutes />,
      },
      {
        path: 'cources/*',
        element: <CourcesRoutes />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
]
