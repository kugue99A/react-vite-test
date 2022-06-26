import clsx from 'clsx'
import React from 'react'

import { Header } from '@/components/common'

import s from './MainLayout.module.css'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.VFC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={clsx(s.layoutContainer)}>{children}</main>
    </>
  )
}

export default MainLayout
