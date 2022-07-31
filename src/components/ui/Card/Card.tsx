import cn from 'clsx'
import React from 'react'

import s from './Card.module.css'

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={cn(s.root)}>{children}</div>
}

export default Card
