import clsx from 'clsx'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import logo from '../../shared/img/logo.svg'
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
      {displayName !== 'AuthPage' && (
        <MainHeader className={styles.headerText} />
      )}
      <div className={styles.headerLogo}>
        <Image src={logo} alt="logo image" height={30} />
      </div>
      <div className={styles.headerBg}></div>
      {displayName !== 'AuthPage' && <Sidebar className={styles.sidebar} />}
      <main>{children}</main>
    </div>
  )
}
