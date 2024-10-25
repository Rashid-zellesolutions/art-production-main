import React from 'react'
import './Home.css';
// import Navbar from '../../GlobalComponents/Navbar/Navbar';
import PerformanceCount from '../../GlobalComponents/PerformanceCount/PerformanceCount';
import OurServices from '../../Components/OurServices/OurServices';
// import Hero from '../../GlobalComponents/Hero/Hero';
// import CustomCarousel from '../../GlobalComponents/Slider/CustomCarousel';
// import Stories from '../../Components/Stories/Stories';
// import Footer from '../../GlobalComponents/Footer/Footer';
import OurPartners from '../../Components/OurPartners';
import OurTeam from '../../Components/OurTeam';
import AboutUs from '../../Components/AboutUs';
import SwiperSlider from '../../Components/Testing';
import RecentProjects from '../../Components/RecentProjects';
import Marquee1 from '../../Components/marquee';
// import Accordian from '../../GlobalComponents/Accordian';
import FAQs from '../../GlobalComponents/FAQs';
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk';
import OurLocations from '../../GlobalComponents/OurLocations/location';
// import GlideSlder from '../../Components/RecentProjects/GlideSlider';

const Home = () => {

  
  return (
    <div>
        <PerformanceCount />
        <RecentProjects/>
        {/* <GlideSlder /> */}
        <Marquee1/>
        <OurServices />
        <AboutUs/>
        <OurPartners/>
        <OurTeam/>
        <SwiperSlider/>
        <OurLocations/>
        <FAQs/>
        <ReadyToAsk/>

    </div>
  )
}

export default Home
