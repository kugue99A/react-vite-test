import { useParams } from 'react-router-dom'

export const Record = () => {
  const { userId } = useParams()
  return (
    <>
      <div>{userId}</div>
    </>
  )
}
