import styles from './Me.module.scss'
import { useMe } from './useMe'

export const Me = () => {
  const { userData } = useMe()
  console.log('user-data: ', userData)
  return (
    <div className={styles.me}>
      <div>Name</div>
      <div>
        <div>Profile</div>
        <div>Status</div>
        <div>AboutME</div>
        <div>HomeUrl</div>
        <div>looking for a job</div>
        <div>description</div>
        <img src="" alt="" />
      </div>
    </div>
  )
}
