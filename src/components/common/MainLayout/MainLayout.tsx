import clsx from 'clsx'
import React from 'react'

import s from './MainLayout.module.css'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.VFC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main className={clsx(s.layoutContainer)}>{children}</main>
    </>
  )
}

export default MainLayout
