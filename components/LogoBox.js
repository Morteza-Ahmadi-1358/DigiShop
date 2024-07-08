import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './LogoBox.module.css'

const LogoBox = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')} className={`${styles.outerContainer}`}>
            <Image src={'/images/logo.svg'} width={150} height={75} />
        </div>
    )
}

export default LogoBox