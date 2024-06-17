import { useState } from 'react'
import '../styles/Carousel.css'
import arrow from '../assets/arrow-right.svg'
import { useMediaQuery } from 'react-responsive';

function Carousel ({id, title, category, date, description, text, imageId, video}){

    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    const nextSlide = (e) => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (imageId.length + video.length - 2));
        e.stopPropagation();
    };

    return (


        <div className='project-carousel'>

            <span className='left-btn' onClick={nextSlide}><img alt="" src={arrow} /></span>

            <div className='carousel-content'  style={{ transform: `translateX(-${currentIndex * (100/imageId.length)}%)` }}>

                {video.map((video, index) => (

                isMobile ? (
                <video key={video} style={{ width: '100vw' }}  onClick={nextSlide} autoPlay loop><source src={video} type="video/mp4" /></video>
                )
                :(
                    <video key={video} style={{ height: '100%' }}  onClick={nextSlide} autoPlay loop><source src={video} type="video/mp4" /></video>
                )

                )
                )}

                {imageId.map((image, index) => (

                isMobile ? (
                    <div key={image} style={{ backgroundImage: `url(${image})` }} className={`carousel-item ${index === currentIndex ? 'active' : ''}`} onClick={nextSlide}></div>
                    )
                    :(
                    <img alt="" key={image} src={image} className={`carousel-item ${index === currentIndex ? 'active' : ''}`} onClick={nextSlide}/>
                    )
                )
                )}

            </div>

        </div>

    )

}

export default Carousel


/*

CAROUSEL QUI FONCTIONNE


        <div className='project-carousel'>

            <span className='left-btn' onClick={nextSlide}><img alt="" src={arrow} /></span>

            <div className='carousel-content'  style={{ transform: `translateX(-${currentIndex * (100/imageId.length)}%)` }}>

                {imageId.map((image, index) => ( 
                    <img alt="" key={image} src={image} className={`carousel-item ${index === currentIndex ? 'active' : ''}`} onClick={nextSlide}/>
                )
                )}

            </div>

        </div>
*/