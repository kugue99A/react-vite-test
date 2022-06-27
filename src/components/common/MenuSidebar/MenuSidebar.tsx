import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import s from './MenuSidebar.module.css'

const MenuSidebar = () => {
  const LinkList = [
    { id: 1, url: '/', title: 'ホーム' },
    { id: 2, url: '/users', title: '患者一覧' },
    { id: 3, url: '/records', title: '来客記録' },
    { id: 4, url: '/cources', title: 'コース一覧' },
    { id: 5, url: '/discounts', title: '割引一覧' },
  ]
  return (
    <>
      <div className={clsx(s.menuSidebarWrapper)}>
        <div className={clsx(s.menuSidebarContainer)}>
          <ul>
            {LinkList.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.url}
                  className={({ isActive }) =>
                    isActive ? clsx(s.activeLink) : clsx(s.nonActiveLink)
                  }
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MenuSidebar
