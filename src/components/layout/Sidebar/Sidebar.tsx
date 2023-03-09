import clsx from 'clsx'
import styles from './Sidebar.module.scss'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...rest }: SidebarProps) => {
  return (
    <div className={clsx(styles.sidebar, className)} {...rest}>
      <ul>
        <li>Home</li>
        <li>Friends</li>
        <li>Messages</li>
      </ul>
    </div>
  )
}
