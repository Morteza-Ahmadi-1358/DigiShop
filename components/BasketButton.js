import React from 'react'
import styles from './BasketButton.module.css'
import { CiShoppingBasket } from 'react-icons/ci'
import { useRouter } from 'next/router'

const BasketButton = () => {
    const router = useRouter()
    return (
        <div className={`${styles.outerContainer}`}>
            <CiShoppingBasket onClick={() => router.push('/shoppingCart')} fontSize={48} className={`${styles.btnContainer}`} />
        </div>
    )
}

export default BasketButton