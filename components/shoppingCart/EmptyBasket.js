import React from 'react'
import styles from './EmptyBasket.module.css'

const EmptyBasket = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <p className={`${styles.basketContainer}`}>سبد خرید خالی است</p>
    </div>
  )
}

export default EmptyBasket