import { useState } from 'react'
import '../styles/Carousel.css'
import arrow from '../assets/arrow-right.svg'

function Carousel ({id, title, category, date, description, text, imageId}){

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageId.length);
        e.stopPropagation();
    };

    return (


        <div className='project-carousel'>

            <span className='left-btn' onClick={nextSlide}><img alt="" src={arrow} /></span>


            <div className='carousel-content'  style={{ transform: `translateX(-${currentIndex * (100/imageId.length)}%)` }}>

                {imageId.map((image, index) => (
                    <img alt="" key={image} src={image} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}/>
                )
                )}

            </div>

        </div>

    )

}

export default Carousel