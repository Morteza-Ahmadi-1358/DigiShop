import ShoppingCartItems from '@/components/shoppingCart/ShoppingCartItems'
import React from 'react'
import styles from './shoppingCart.module.css'
import { useSelector } from 'react-redux'
import EmptyBasket from '@/components/shoppingCart/EmptyBasket'
import ShoppingCartAmount from '@/components/shoppingCart/ShoppingCartAmount'

const shoppingCart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart)
    return (
      <div className={`${styles.outerContainer}`}>
        <div className={`${styles.rightContainer}`}>
          <h4 className={`${styles.titleContainer}`}>سبد خرید</h4>
          {
            shoppingCart.items.length === 0 ? <EmptyBasket /> :
            <ShoppingCartItems products={shoppingCart.items} />
          }
        </div>
        <div className={`${styles.leftContainer}`}>
          <h4 className={`${styles.titleContainer}`}>مبلغ سبد</h4>
          {
            shoppingCart.items.length === 0 ? <EmptyBasket /> : 
            <ShoppingCartAmount />
          }
        </div>
      </div>
    )
}

export default shoppingCart