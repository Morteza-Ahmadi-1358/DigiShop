import React from 'react'
import styles from './[selectedCategory].module.css'
import Card from '@/components/Card'
import * as axiosRepo from '@/repositories/axiosRepository'

const selectedCategory = ({categories}) => {
    return (
        <div className={`${styles.outerContainer}`}>
            {
                categories.map(category => {
                    return (
                        <Card product={category} />
                    )
                })
            }
        </div>
    )
}

export default selectedCategory

export async function getServerSideProps(context) {
    let categories = []
    const response = await axiosRepo.GET(`products/${context.params.selectedCategory}`)
    categories = await response.data
    return {
        props: {
            categories
        }
    }
}