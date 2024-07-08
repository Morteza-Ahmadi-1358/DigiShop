import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ShoppingCartAmount.module.css'

const ShoppingCartAmount = () => {
    const shoppingCart = useSelector(state => state.shoppingCart)
    return (
        <div>
            <label className={`${styles.labelContainer}`}>مبلغ خرید: </label>
            <span className={`${styles.spanContainer}`}>{(shoppingCart.totalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span><br />
            <label className={`${styles.labelContainer}`}>تعداد اقلام: </label>
            <span className={`${styles.spanContainer}`}>{shoppingCart.totalCount}</span>
            <label className={`${styles.labelContainer}`}>9% مالیات: </label>
            <span className={`${styles.spanContainer}`}>{(shoppingCart.totalAmount * 9 / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
            <br /><hr className={`${styles.seperator}`} />
            <label className={`${styles.labelContainer}`}>قابل پرداخت: </label>
            <span className={`${styles.spanContainer}`}>{(shoppingCart.totalAmount + shoppingCart.totalAmount * 9 / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
        </div>
    )
}

export default ShoppingCartAmount