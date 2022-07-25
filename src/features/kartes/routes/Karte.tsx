import { useParams } from 'react-router-dom'

export const Karte = () => {
  const { karteId } = useParams()
  return (
    <>
      <div>{karteId}</div>
    </>
  )
}
