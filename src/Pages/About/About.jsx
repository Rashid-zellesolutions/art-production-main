import React from 'react'
import './About.css';
import PerformanceCount from '../../GlobalComponents/PerformanceCount/PerformanceCount';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import documentaryImage from '../../Assets/services/documentaries.png';
import ServiceCard2 from '../../Components/ServiceCard2';
import WorkedWith from '../../Components/workedWith';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import image1 from "../../Assets/portfolio/interview.png";
import Award from '../../Components/award';
import SwiperSlider from '../../Components/Testing';
import OurLocations from '../../GlobalComponents/OurLocations/location';
import FAQs from '../../GlobalComponents/FAQs';
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk';

const About = () => {
  const servicesData = [
    {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Markeeting', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
      in-depth and informative resource that is a perfect platform to create dialogue. 
      They serve as powerful tools for bringing the important topics to the table in a 
      captivating way that also sparks conversation, and sometimes even social movements`,
  paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
      the result you are looking for. we scout for shooting sets, we look for the best 
      guests, crew, and equipment. During the post-production phase, we take care of every 
      detail like video editing and color grading until the film is published, we market 
      the film on all different platforms on the internet`
  },
  ]
  return (
  
    <div className='about-us-main'>
      <PerformanceCount/>
      <ServiceCard2/>
      <WorkedWith/>
      <div className='intro_content' style={{
        display:"flex"
      }}>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          flex:"1"
        }}>
           <MainHeading content1={"Why Choose Art"} content2={" Productions"} />
           <p>At Art Production®, we’re not just about creating videos—we’re about creating magic. Our award-winning team based in Istanbul has been bringing stories to life since 2004, working with global clients to deliver unforgettable content.</p>
        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"flex-start",
          flex:"1"
        }} className='intro_content_right'>
          <img src={image1} alt="" />
        </div>

      </div>



      <div className='intro_content' style={{
        display:"flex"
      }}>
        
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"flex-start",
          flex:"1"
        }} className='intro_content_right'>
          <img src={image1} alt="" />
        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          flex:"1"
        }}>
           <p>Why do our clients choose us? Because we infuse every project with creativity and enthusiasm. We’re not just another production house; we’re your creative collaborators, making the entire process enjoyable and exciting.</p>
           <div style={{height:"20px"}}></div>
           <p>With us, you get more than just a video—you get a team that’s passionate about turning your vision into a captivating experience. So, why Art Production®? Because we don’t just deliver; we delight, inspire, and exceed expectations. Let’s make something extraordinary together.</p>
        </div>


      </div>
      <Award/>
      <SwiperSlider />
      <OurLocations />
      <FAQs />
      <ReadyToAsk />
      {/* {servicesData.map((items, index) => (
            <ServiceCard
                key={index}
                serviceHeading={items.serviceName}
                serviceHeadingTwo={items.serviceNameTwo}
                serviceBanner={items.img}
                paraOne={items.paraOne}
                paraTwo={items.paraTwo}
                backgroundColor={items.bgColor}
                flexDirection={items.flexDir}
                justifyContent={items.contentJustify}
                padding={items.padding}
                slideSection={items.slide}
            />
        ))} */}
    </div>
  )
}

export default About
