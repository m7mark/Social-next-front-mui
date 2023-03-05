import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { MainHeader } from './MainHeader/MainHeader'
import { Sidebar } from './Sidebar/Sidebar'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <MainHeader className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main>{children}</main>
    </div>
  )
}
