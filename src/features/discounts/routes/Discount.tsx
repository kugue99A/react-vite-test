import { useParams } from 'react-router-dom'

export const Discount = () => {
  const { discountId } = useParams()
  return (
    <>
      <div>{discountId}</div>
    </>
  )
}
