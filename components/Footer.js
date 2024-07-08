import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.contentContainer}`}>
                <span className={`${styles.titleContainer}`}>فــــــوتــــــر</span>
            </div>
        </div>
    )
}

export default Footer