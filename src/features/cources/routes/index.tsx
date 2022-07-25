import { Navigate, Route, Routes } from 'react-router-dom'

import { Cource } from './Cource'
import { Cources } from './Cources'

export const CourcesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Cources />} />
      <Route path=":courceId" element={<Cource />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
