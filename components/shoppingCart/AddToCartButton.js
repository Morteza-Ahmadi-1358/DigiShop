import React from 'react'
import styles from './AddToCartButton.module.css'
import { useDispatch } from 'react-redux'
import { addItem } from '@/redux/features/shoppingCart/shoppingCartSlice'

const AddToCartButton = ({product}) => {
    const dispatch = useDispatch()
    const submitHandler = () => {
        dispatch(addItem(product))
    }
    return (
        <div className={`${styles.outerContainer}`} onClick={submitHandler}>
            <label className={`${styles.labelContainer}`}>افزودن به سبد</label>
        </div>
    )
}

export default AddToCartButton