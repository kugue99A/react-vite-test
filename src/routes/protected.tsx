import { Suspense } from 'react'

import { Navigate, Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Suspense>
      </Suspense>
    </>
  )
}

export const protectedRoutes = [
  {}
]
