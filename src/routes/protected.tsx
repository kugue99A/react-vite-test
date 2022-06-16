import { Navigate, Outlet } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { Users } = lazyImport(() => import('@/features/users'), 'Users')
//import { Users } from '@/features/users'

const App = () => {
  return <>aaaaaa</>
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
]
