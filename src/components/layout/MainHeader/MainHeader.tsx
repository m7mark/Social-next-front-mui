import clsx from 'clsx'
import { AccountMenu } from './AccountMenu'
import styles from './MainHeader.module.scss'
import { MainHeaderProps } from './MainHeader.props'

export const MainHeader = ({ className, ...rest }: MainHeaderProps) => {
  return (
    <div className={clsx(styles.mainHeader, className)} {...rest}>
      <AccountMenu />
    </div>
  )
}
