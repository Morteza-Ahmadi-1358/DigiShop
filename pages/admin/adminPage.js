import React from 'react'
import styles from './adminPage.module.css'

const adminPage = () => {
    return (
      <div className={`${styles.outerContainer}`}>
        <div className={`${styles.contentContainer}`}>
          <span className={`${styles.titleContainer}`}>بخش ادمین</span>
        </div>
      </div>
    )
}

export default adminPage