import Card from '@/components/Card'
import React from 'react'
import styles from './[textForSearch].module.css'
import * as axiosRepo from '@/repositories/axiosRepository'

const textForSearch = ({products}) => {
    return (
        <div className={`${styles.outerContainer}`}>
            {
                products.map(product => {
                    return (
                        <Card product={product} />
                    )
                })
            }
        </div>
    )
}

export default textForSearch

export async function getServerSideProps(context) {
    let products = []
    const response = await axiosRepo.GET(`products/search/${context.params.textForSearch}`)
    products = await response.data
    return {
        props: {
            products
        }
    }
}