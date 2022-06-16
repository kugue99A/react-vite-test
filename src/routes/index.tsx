import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'

const App = () => {
  return <>bbb</>
}

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <App /> }]
  const routes = protectedRoutes
  console.log('aaaaa')
  const element = useRoutes([...routes, ...commonRoutes])
  console.log('aaaaa')

  return <>{element}</>
}
