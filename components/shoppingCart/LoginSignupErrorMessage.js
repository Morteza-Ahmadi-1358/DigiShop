import React from 'react'
import styles from './LoginSignupErrorMessage.module.css'

const LoginSignupErrorMessage = (props) => {
    return (
        <div className={`${styles.outerContainer}`}>
            <label className={`${styles.labelContainer}`}>{props.children}</label>
        </div>
    )
}

export default LoginSignupErrorMessage