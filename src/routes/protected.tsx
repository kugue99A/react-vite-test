import { Navigate } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { Users } = lazyImport(() => import('@/features/users'), 'Users')
const { Kartes } = lazyImport(() => import('@/features/kartes'), 'Kartes')
const { Cources } = lazyImport(() => import('@/features/cources'), 'Cources')
const { Records } = lazyImport(() => import('@/features/records'), 'Records')
const { Discounts } = lazyImport(() => import('@/features/discounts'), 'Discounts')

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
    path: '/discounts',
    element: <Discounts />,
  },
  {
    path: '/records',
    element: <Records />,
  },
  {
    path: '/kartes',
    element: <Kartes />,
  },
  {
    path: '/cources',
    element: <Cources />,
  },
  {
    path: '*',
    element: <Navigate to="." />,
  },
]
