import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCrousel = () => {

    const items = mainCarouselData.map((item) => 
    <img
        className='cursor-pointer'
        role='presentation'
        src={item.image}
        alt=''
        style={{
            width: '100%',
            height: '50vh',
            objectFit: 'cover'
        }}
    />)

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            animationDuration={500}
        />
    )
}

export default MainCrousel;