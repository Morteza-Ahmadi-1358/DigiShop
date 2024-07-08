import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './SevenIcons.module.css'

const SevenIcons = ({icons}) => {
    return (
        <div className={`${styles.outerContainer}`}>
            {
                icons.map(icon => {
                    return (
                        <Link href={`/products/categories/${icon.url}`} className={`${styles.linkContainer}`}>
                            <div className={`${styles.contentContainer}`}>
                                <Image src={`/images/${icon.iconName}`} className={`${styles.imageContainer}`} width={60} height={60} />
                                <label className={`${styles.labelContainer}`}>{icon.label}</label>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SevenIcons