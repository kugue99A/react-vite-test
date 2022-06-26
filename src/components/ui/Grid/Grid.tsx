import React from 'react'

type GridProps = {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <>{children}</>
}

export default Grid
