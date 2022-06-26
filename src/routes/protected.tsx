import { Navigate } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { Users } = lazyImport(() => import('@/features/users'), 'Users')
const { Kartes } = lazyImport(() => import('@/features/kartes'), 'Kartes')
const { Coucers } = lazyImport(() => import('@/features/cources'), 'Cources')
const { Records } = lazyImport(() => import('@/features/records'), 'Records')
const { Disconts } = lazyImport(() => import('@/features/discounts'), 'Disconts')

const App = () => {
  return <>hello world</>
}

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '*',
    element: <Navigate to="." />,
  },
]
