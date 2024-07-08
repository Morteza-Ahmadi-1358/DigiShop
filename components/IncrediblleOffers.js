import React from 'react'
import styles from './IncrediblleOffers.module.css'
import Image from 'next/image'
import Carusel from './Carusel'

const IncrediblleOffers = ({products}) => {
    return (
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.imageContainer}`}>
                <Image src={'/images/box.png'} width={150} height={150} />
                <Image src={'/images/amazingTypo.png'} width={100} height={100} />
            </div>
            <div className={`${styles.carouselContainer}`}>
                <Carusel data={products} cardsCount={4} slideToShow={1} />
            </div>
        </div>
    )
}

export default IncrediblleOffers