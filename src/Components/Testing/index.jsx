import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgImgStories from "../../Assets/stories/stories-section-bg.png"
import './style.css';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
// import arrowLeft from '../../Assets/icons/arrow-left-white.png';
// import arrowRight from '../../Assets/icons/arrow-white-right.png';
import { MdArrowForwardIos  } from "react-icons/md";
import { MdArrowBackIos  } from "react-icons/md";


// Import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperSlider() {
    const swiperRef = useRef(null); // Create a ref to access Swiper instance

    // Custom navigation functions
    const handleNext = () => {
        swiperRef.current.swiper.slideNext(); // Go to the next slide
    };

    const handlePrev = () => {
        console.log("working")
        swiperRef.current.swiper.slidePrev(); // Go to the previous slide
    };
    const storiesData = [
        {
            logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
            name: 'Abdo Madkhana', position: 'MANAGER AL JAZEERA'
        },

    ]

    return (
        <div style={{
            backgroundImage: `url(${bgImgStories})`
        }} className='mySlider'>
            <MainHeading content1={"Stories That Make "} content2={"Us Smile!"} />
            <div onClick={handlePrev} className="swiper-button-prev-cust"><MdArrowBackIos  />
            </div>
            <Swiper
                ref={swiperRef} // Assign the ref to Swiper
                spaceBetween={5} // Space between the slides
                slidesPerView={1.6} // Show 1 full slide and part of the next and previous ones
                initialSlide={1}
                loop={true}
                centeredSlides={true} // Center the active slide
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]} // Only use Pagination here since we're using custom buttons
                className="mySwiper"
            >

                {
                    storiesData.map((item, index) => (
                        <SwiperSlide className='innerSliderContent'>
                            <img src={item.logo} alt='logo' />
                            <p>{item.post}</p>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>

            {/* Custom Navigation Buttons */}



            <div onClick={handleNext} className="swiper-button-next-cust"><MdArrowForwardIos />
            </div>


        </div>
    );
}
