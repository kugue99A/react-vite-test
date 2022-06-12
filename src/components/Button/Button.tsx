import React from 'react'
import s from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode;
}

const Button: React.VFC<ButtonProps> = (props) => {
  return (
    <>
      <button className={s.container}>{props.children}</button>
    </>
  )
} 

export default Button
