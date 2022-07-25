import clsx from 'clsx'
import React from 'react'

import s from './Card.module.css'

type CardProps = {
  children: React.ReactNode
}

const Card: React.VFC<CardProps> = ({ children }) => {
  return <div className={clsx(s.cardContainer)}>{children}</div>
}

export default Card
