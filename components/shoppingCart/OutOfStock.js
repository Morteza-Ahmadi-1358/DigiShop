import React from 'react'
import styles from './OutOfStock.module.css'

const OutOfStock = () => {
    return (
        <div className={`${styles.outerContainer}`}>
            <label className={`${styles.labelContainer}`}>ناموجود</label>
        </div>
    )
}

export default OutOfStock