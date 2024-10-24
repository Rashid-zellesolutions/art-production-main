// src/CardSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Ensure you import the Swiper styles
// import 'swiper/swiper-bundle.css'; // Ensure you import the Swiper styles
// import 'swiper/modules/pagination/pagination.css'; // Import pagination styles if needed
import './CustomCarousel.css';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png'
import 'swiper/css';

// Create the CardSlider component
const CardSlider = () => {
  const storiesData = [
    {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
    },
    {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
    },
    {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
    },
    // {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
    //         premise have been very professional and flexible and we always get exactly what 
    //         we are looking for, if not more`,
    //     name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
    // },
    // {logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
    //     premise have been very professional and flexible and we always get exactly what 
    //     we are looking for, if not more`,
    //     name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
    // },

]
  return (
    <div className='main'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  );
};

export default CardSlider;
