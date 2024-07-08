import React, { useState } from 'react'
import styles from './signUp.module.css'
import { ErrorMessage, Form, Field, Formik } from 'formik'
import LoginSignupErrorMessage from '@/components/shoppingCart/LoginSignupErrorMessage'
import * as Yup from 'yup'
import * as axiosRepo from '@/repositories/axiosRepository'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap'

const signUp = () => {
    const router = useRouter()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const formFields = {username: '', password: ''}
    const validationSchema = Yup.object({
        username: Yup.string().required('شماره موبایل الزامی است'),
        password: Yup.string().required('کلمه عبور الزامی است')
    })
    const submitHandler = (values) => {
        axiosRepo.POST('users/register', values)
        .then(response => {
            if (response.data.id !== 0) {
                axiosRepo.POST('users/login', values)
                .then(loginResponse => {
                    Cookies.set('jwt', loginResponse.data.token)
                    setToastMessage('ورود موفقیت‌آمیز')
                    setTimeout(() => {
                        router.push('/shoppingCart')
                    }, 3000)
                })
                .catch(error => console.log(error))
            }
            else{
                setToastMessage('شماره موبایل تکراری است')
            }
        })
        .catch(error => console.log(error))
        setShowToast(true)
    }
    return (
        <div className={`${styles.outerContainer}`}>
        <div className={`${styles.titleContainer}`}>فــرم ثبت‌نام</div>
            <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false} >
                <Form>
                    <Field type='text' name='username' className={`${styles.fieldContainer}`} placeholder='شماره موبایل' />
                    <ErrorMessage name='username' component={LoginSignupErrorMessage} />
                    <Field type='password' name='password' className={`${styles.fieldContainer}`} placeholder='کلمه عبور' />
                    <ErrorMessage name='password' component={LoginSignupErrorMessage} />
                    <button type='submit' className={`${styles.btnSubmitContainer}`}>ثبت‌نام</button>
                </Form>
            </Formik>
            <ToastContainer position='middle-center'>
                <Toast show={showToast} autohide={true} delay={3000} onClose={() => setShowToast(false)}>
                    <ToastHeader closeButton={false} className='bg-danger text-right text-white fw-bold'>نتیجه ثبت‌نام</ToastHeader>
                    <ToastBody className='my-5 py-5 text-center text-danger fw-bold'>{toastMessage}</ToastBody>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export default signUp