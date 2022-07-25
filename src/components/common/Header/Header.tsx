import clsx from 'clsx'

import s from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={clsx(s.headerWrapper)}>
        <div className={clsx(s.headerContainer)}>
          <div className={clsx(s.headerIcon)}>icon</div>
          <div className={clsx(s.headerFunctions)}>links</div>
        </div>
      </header>
    </>
  )
}

export default Header
