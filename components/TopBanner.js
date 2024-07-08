import React, { useEffect, useState } from 'react'
import * as axiosRepo from '@/repositories/axiosRepository'
import Image from 'next/image'
import styles from './TopBanner.module.css'
import { useRouter } from 'next/router'

const TopBanner = () => {
    const [topBanner, setTopBanner] = useState([])
    const router = useRouter()
    useEffect(() => {
        axiosRepo.GET('topBanner')
        .then(response => setTopBanner(response.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className={`${styles.outerContainer}`} onClick={() => router.push('/')}>
            <Image src={topBanner.imageUrl} fill className={`${styles.imageContainer}`} />
        </div>
    )
}

export default TopBanner