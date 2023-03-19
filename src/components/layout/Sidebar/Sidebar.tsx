import clsx from 'clsx'
import { useRouter } from 'next/router'
import { sideMenu } from './menu'
import styles from './Sidebar.module.scss'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...rest }: SidebarProps) => {
  const { push } = useRouter()
  return (
    <div className={clsx(styles.sidebar, className)} {...rest}>
      <ul>
        {sideMenu.map((m) => (
          <li key={m.title} onClick={() => push(m.link)}>
            {m.icon}
            {m.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
