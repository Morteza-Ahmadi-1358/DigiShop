import React from 'react'
import styles from './ShoppingCartItems.module.css'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartItems = ({products}) => {
    return (
        <div className={`${styles.outerContainer}`}>
            {
                products.map(product => {
                    return (
                        <ShoppingCartItem product={product} />
                    )
                })
            }
        </div>
    )
}

export default ShoppingCartItems