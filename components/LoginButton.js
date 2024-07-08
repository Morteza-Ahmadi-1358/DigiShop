import React from 'react'
import styles from './LoginButton.module.css'
import { useRouter } from 'next/router'
import { CiLogin } from 'react-icons/ci'

const LoginButton = () => {
    const router = useRouter()
    return (
        <div>
            <CiLogin onClick={() => router.push('/login')} title='ورود' fontSize={48} className={`${styles.btnContainer}`} />
        </div>
    )
}

export default LoginButton