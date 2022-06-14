import { useParams } from 'react-router-dom'

export const Cource = () => {
  const { courceId } = useParams()
  return (
    <>
      <div>{courceId}</div>
    </>
  )
}
