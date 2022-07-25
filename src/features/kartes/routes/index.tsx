import { Navigate, Route, Routes } from 'react-router-dom'

import { Karte } from './Karte'
import { Kartes } from './Kartes'

export const KartesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Kartes />} />
      <Route path=":karteId" element={<Karte />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
