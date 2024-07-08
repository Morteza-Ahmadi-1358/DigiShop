import { Context } from '@/contextApi/Context'
import React, { useContext } from 'react'
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const MainSlider = () => {
    const {mainSliderImages} = useContext(Context)
    return (
        <div>
            <ReactImageGallery items={mainSliderImages} autoPlay={true} slideInterval={4000} isRTL={true} />
        </div>
    )
}

export default MainSlider