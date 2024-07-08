import React from 'react'
import styles from './LogoutButton.module.css'
import { CiLogout } from 'react-icons/ci'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const LogoutButton = () => {
    const router = useRouter()
    const logoutHandler = () => {
        Cookies.remove('jwt')
        router.push('/')
    }
    return (
        <div>
            <CiLogout onClick={logoutHandler} title='خروج' fontSize={48} className={`${styles.btnContainer}`} />
        </div>
    )
}

export default LogoutButton