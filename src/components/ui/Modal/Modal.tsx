import clsx from 'clsx'
import { ReactNode, VFC } from 'react'

import s from './Modal.module.css'

type ModalProps = {
  children: ReactNode
  width?: string
}

const Modal: VFC<ModalProps> = ({ children }) => {
  return (
    <>
      <div className={clsx(s.modalWrapper)}>
        <div className={clsx(s.modalInnerWrapper)}>
          <div className={clsx(s.modalContainer)}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
