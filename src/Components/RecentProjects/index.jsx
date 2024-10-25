import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgImgStories from "../../Assets/stories/stories-section-bg.png"
import './style.css';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
import arrowLeft from '../../Assets/icons/arrow-left-white.png';
import arrowRight from '../../Assets/icons/arrow-white-right.png';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import img1 from "../../Assets/recent-projects/img1.jpg";
import img2 from "../../Assets/recent-projects/img2.jpg";
import img3 from "../../Assets/recent-projects/img3.jpg";
import play from "../../Assets/recent-projects/ei_play.png"


// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function RecentProjects() {
    // SwiperCore.use([autoplay])
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
            logo: alJazeeraLogo, 
            bg:img1,
            post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', 
            position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, 
            bg:img3,
            post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', 
            position: 'MANAGER AL JAZEERA'
        },
        {
            logo: alJazeeraLogo, 
            bg:img2,
            post: `The teams that worked on our projects on location and in 
                premise have been very professional and flexible and we always get exactly what 
                we are looking for, if not more`,
            name: 'Abdo Madkhana', 
            position: 'MANAGER AL JAZEERA'
        },
    ]
    // const swiper = new Swiper(".swiper", {
    //     Autoplay: {
    //         delay: 3000,
    //     }
    // })

    return (
        <div style={{
            // backgroundImage: `url(${bgImgStories})`
        }} className='mySlider'>
           <MainHeading content1={"Recent "} content2={"Projects"} />
            {/* <div onClick={handlePrev} className="swiper-button-prev-cust"><MdArrowBackIos />
            </div> */}
            <Swiper
                ref={swiperRef} // Assign the ref to Swiper
                spaceBetween={20} // Space between the slides
                slidesPerView={1.5}
                centeredSlides={true} // Center the active slide
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]} // Only use Pagination here since we're using custom buttons
                className="mySwiper2"
                
            >

                {
                    storiesData.map((item, index) => (
                        <SwiperSlide style={{backgroundImage:`url(${item.bg})`}} className='recentProjectsInnerSlider'>
                            <img src={play} alt="" />
                        </SwiperSlide>
                    ))
                }


            </Swiper>

            {/* Custom Navigation Buttons */}



            {/* <div onClick={handleNext} className="swiper-button-next-cust"><MdArrowForwardIos />
            </div> */}


        </div>
    );
}
