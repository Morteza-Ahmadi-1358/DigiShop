import React from 'react'
import styles from './Header.module.css'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'
import LoginButton from './LoginButton'
import BasketButton from './BasketButton'
import LogoBox from './LogoBox'
import Cookies from 'js-cookie'
import LogoutButton from './LogoutButton'

const Header = () => {
    return (
        <div className={`${styles.outerContainer}`}>
            <TopBanner />
            <div className={`${styles.contentContainer}`}>
                <div className={`${styles.rightContainer}`}>
                    <LogoBox />
                    <SearchBox />
                </div>
                <div className={`${styles.leftContainer}`}>
                    {
                        Cookies.get('jwt') === undefined ? <LoginButton /> : <LogoutButton />
                    }
                    <BasketButton />
                </div>
            </div>
        </div>
    )
}

export default Header