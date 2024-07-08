import React from 'react'
import styles from './landingPage.module.css'
import * as AxiosRepo from '@/repositories/axiosRepository'
import Card from '@/components/Card'

const landingPage = ({products}) => {
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

export default landingPage

export async function getServerSideProps() {
    let products = []
    const response = await AxiosRepo.GET('products')
    products = await response.data
    return {
        props: {
            products
        }
    }
}