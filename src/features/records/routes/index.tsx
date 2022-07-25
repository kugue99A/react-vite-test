import { Navigate, Route, Routes } from 'react-router-dom'

import { Record } from './Record'
import { Records } from './Records'

export const RecordsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Records />} />
      <Route path=":userId" element={<Record />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
