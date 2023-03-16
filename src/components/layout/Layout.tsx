import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { MainHeader } from './MainHeader/MainHeader'
import { Sidebar } from './Sidebar/Sidebar'

interface LayoutProps extends PropsWithChildren {
  displayName: string | undefined
}

export const Layout = ({ children, displayName }: LayoutProps) => {
  return (
    <div
      className={clsx([
        styles.layout,
        displayName === 'AuthPage' && styles.layoutAuth,
      ])}
    >
      <MainHeader className={styles.headerText} />
      <div className={styles.headerLogo}>Logo</div>
      <div className={styles.headerBg}></div>
      {displayName !== 'AuthPage' && <Sidebar className={styles.sidebar} />}
      <main>{children}</main>
    </div>
  )
}
