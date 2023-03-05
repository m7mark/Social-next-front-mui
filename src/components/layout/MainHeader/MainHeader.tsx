import clsx from 'clsx'
import styles from './MainHeader.module.scss'
import { MainHeaderProps } from './MainHeader.props'

export const MainHeader = ({ className, ...rest }: MainHeaderProps) => {
  return (
    <div className={clsx(styles.mainHeader, className)} {...rest}>
      Header
    </div>
  )
}
