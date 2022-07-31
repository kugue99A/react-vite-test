import cn from 'clsx'
import { FC, MouseEventHandler, ReactNode } from 'react'

import s from './Button.module.css'

type ButtonProps = {
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  theme?: 'primary' | 'inverse' | 'text'
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, onClick, theme } = props
  const rootClassName = cn(className, s.root, theme)
  return (
    <>
      <button className={rootClassName} onClick={onClick}>
        {children}
      </button>
    </>
  )
}
export default Button
