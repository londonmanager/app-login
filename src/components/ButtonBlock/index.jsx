/* eslint-disable */
import styles from './index.module.scss'

export default function ButtonBlock({ icon, action, component: Component = 'button', ...otherProps }) {
  return (
    <Component onClick={action} className={styles.button} {...otherProps}>
      {icon}
    </Component>
  )
}
