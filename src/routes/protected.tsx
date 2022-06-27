import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { MainLayout } from '@/components/common'
import { lazyImport } from '@/utils/lazyImport'

const { UsersRoutes } = lazyImport(() => import('@/features/users'), 'UsersRoutes')
const { Kartes } = lazyImport(() => import('@/features/kartes'), 'Kartes')
const { Cources } = lazyImport(() => import('@/features/cources'), 'Cources')
const { Records } = lazyImport(() => import('@/features/records'), 'Records')
const { Discounts } = lazyImport(() => import('@/features/discounts'), 'Discounts')

const App = () => {
  return (
    <>
      <MainLayout>
        <Suspense fallback={<div>aaaaa</div>}>
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
        path: 'discounts',
        element: <Discounts />,
      },
      {
        path: 'records',
        element: <Records />,
      },
      {
        path: 'kartes',
        element: <Kartes />,
      },
      {
        path: 'cources',
        element: <Cources />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
]
