import clsx from 'clsx'
import { InputHTMLAttributes, FC, MouseEventHandler } from 'react'

import s from './Input.module.css'

export type InputProps = {
  className?: string
  onChange?: MouseEventHandler<HTMLButtonElement>
  label?: string
  type?: 'date' | 'password' 
}

const Input: FC<InputProps> = (props) => {
  const { className, onChange, label, type } = props

  const rootClassName = clsx(s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label className={rootClassName}>
      {label}
      <input
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type={type}
      />
    </label>
  )
}

export default Input
