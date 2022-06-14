import { Navigate, Route, Routes } from 'react-router-dom'

import { Discount } from './Discount'
import { Discounts } from './Discounts'

export const DiscountsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Discounts />} />
      <Route path=":discountId" element={<Discount />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
