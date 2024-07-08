import React from 'react'
import styles from './ShoppingCartItem.module.css'
import Image from 'next/image'
import ShoppingCartItemsCountButton from './ShoppingCartItemsCountButton'

const ShoppingCartItem = ({product}) => {
    return (
        <div className={`${styles.outerConatiner}`}>
            <div>
                <Image src={product.indexImageUrl} width={200} height={200} />
            </div>
            <div className={`${styles.contentConatiner}`}>
                <label className={`${styles.labelConatiner}`}>نام محصول: </label><span> {product.name}</span><br />
                <label className={`${styles.labelConatiner}`}>قیمت محصول: </label><span> {product.price}</span>
                <ShoppingCartItemsCountButton productId={product.id} />
            </div>
        </div>
    )
}

export default ShoppingCartItem