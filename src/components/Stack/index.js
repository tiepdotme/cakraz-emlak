import React from 'react'

import styles from './stack.module.css'

const Stack = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}

export default Stack