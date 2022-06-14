import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import s from './Container.module.css'

type ContainerProps = {
  children: ReactNode
  gap?: 'small' | 'medium' | 'large'
}

const Container: FC<ContainerProps> = (props) => {
  const { children, gap } = props
  const rootClassName = clsx(s.root, s[gap || 'medium'])
  return <div className={rootClassName}>{children}</div>
}

export default Container
