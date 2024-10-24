import React, { useState } from 'react';
import './OurServices.css';
import videoProductionImage from '../../Assets/services-images/portrait-fitness-influencer.png'
import documentriesImage from '../../Assets/services-images/private-investigator-searching-files-based-case-names-archive_482257-83351 1.png'
import creativeInterviewImage from '../../Assets/services-images/high-angle-man-with-laptop-podcast.png'
import commercialImage from '../../Assets/services-images/man-woman-looking-clipboard.png'
import eventManagmentImage from '../../Assets/services-images/man-making-music-bedroom-front-view.png'
import shortFilmImage from '../../Assets/services-images/man-filming-with-professional-camera.png'
import markeetingImage from '../../Assets/services-images/tech-vlogger.png'
import Button from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';

const OurServices = () => {
    const servicesData = [
        {name: 'Video Production', checkName: 'Video Production', img: videoProductionImage, para: 'Through our long experience in this field, we were involved in many sections of video production.', gridClass: 'video-production'},
        {name: 'Documentries', img: documentriesImage, para: 'Through our long experience in this field.', gridClass: 'documentaries'},
        {name: 'Creative Interview', img: creativeInterviewImage, para: 'Through our long experience in this field, we were involved in many sections of video production.', gridClass: 'creative-interview'},
        {name: 'Commercial & Advertisiment', img: commercialImage, para: 'Through our long experience in this field.', gridClass: 'commercial'},
        {name: 'Event Management', img: eventManagmentImage, para: 'Through our long experience in this field, we were involved in many sections of video production.', gridClass: 'event-managment'},
        {name: 'Short Films', img: shortFilmImage, para: 'Through our long experience in this field, we were involved in many sections of video production.', gridClass: 'short-films'},
        {name: 'Markeeting', img: markeetingImage, para: 'Through our long experience in this field, we were involved in many sections of video production.', gridClass: 'markeeting'},

    ]
    const [currentIndex, setCurrentIndex] = useState(null)
    const handleMouseOver = (index) => {setCurrentIndex(index)}
    const handleMouseLeave = () => {setCurrentIndex(null)}
  return (
    <div className='our-services-main-section'>
        <h3>Our <span>Services</span></h3>
        <div className='services-show-case-main-container'>
            
            {servicesData.map((items, index) => (
                <div 
                    className={`grid-col ${items.gridClass}`}  
                    onMouseEnter={() => handleMouseOver(index)} 
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`flesh-container ${currentIndex === index ? 'slide-flash' : ''}`}></div>
                    <img src={items.img} alt='video production' />
                    <div 
                        className={`col-overlay ${currentIndex === index ? 'show-overlay' : ''}`}
                    > 
                        <h3>{items.name}</h3>
                        <div className={`col-inner-overlay ${currentIndex === index ? 'show-inner-overlay' : ''}`}>
                            <div className={`inner-overlay-containt ${currentIndex === index  ? 'inner-overlay-containt-effect' : ''}`}>
                                <h3>{items.name}</h3>
                                <p>{items.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='see-all-projects-section'>
            <PrimeryButton 
                text={'See All Projects'} 
                width={'243px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
                arrowTrue={true}
            />
        </div>
    </div>
  )
}

export default OurServices
