/* eslint-disable */
import { Typography } from 'londonmanager-legos'
import styles from './index.module.scss'

export default function ButtonSection({ icon, label, action }) {
  return (
    <div className={styles.container}>
      <button onClick={action} className={styles.button}>
        {icon}
      </button>
      <Typography type='utility' size="md">{label}</Typography>
    </div>
  )
}
