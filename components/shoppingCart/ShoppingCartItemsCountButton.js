import { decreaseItem, increaseItem, removeItem } from '@/redux/features/shoppingCart/shoppingCartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsTrash3Fill} from 'react-icons/bs'
import styles from './ShoppingCartItemsCountButton.module.css'

const ShoppingCartItemsCountButton = ({productId}) => {
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart)
    const count = shoppingCart.items.filter(item => item.id === productId)[0].count
    return (
        <div className={`${styles.outerContainer}`}>
            <span className={`${styles.spnContainer}`} onClick={() => dispatch(increaseItem(productId))}> + </span>
            <span> {count} </span>
            <span className={`${styles.spnContainer}`}>
                {
                    count === 1 ? <BsTrash3Fill onClick={() => dispatch(removeItem(productId))} /> :
                    <span onClick={() => dispatch(decreaseItem(productId))}> - </span>
                }
            </span>
        </div>
    )
}

export default ShoppingCartItemsCountButton