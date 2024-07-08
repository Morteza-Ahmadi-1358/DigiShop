import React, { useRef } from 'react'
import styles from './SearchBox.module.css'
import { CiSearch } from 'react-icons/ci'
import { useRouter } from 'next/router'

const SearchBox = () => {
    const textForSearch = useRef()
    const router = useRouter()
    const searchHandler = () => {
        router.push(`/products/searchResult/${textForSearch.current.value}`)
    }
    return (
        <div className={`${styles .outerContainer}`}>
            <input type='text' ref={textForSearch} placeholder='متن مورد نظر را وارد کنید' className='form-control d-inline-block w-100' />
            <button type='submit' onClick={searchHandler} className={`${styles.btnSearchContainer}`}>
                <CiSearch fontSize={32} />
            </button>
        </div>
    )
}

export default SearchBox