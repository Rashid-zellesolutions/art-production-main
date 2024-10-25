import React , {useState, useEffect} from 'react'
import './ServiceCard.css';
import documentaryImage from '../../Assets/services/documentaries.png'
// import aos from 'aos';

const ServiceCard = ({backgroundColor, ind, projectDone, slideSection, justifyContent, padding, flexDirection, serviceBanner, serviceHeading, serviceHeadingTwo, paraOne, paraTwo}) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const handleOveerlayShow = () => {setShowOverlay(true)}
    const handleOverlayHidden = () => {setShowOverlay(false)}
    return (
    <div 
        className='service-name'  
        data-aos={slideSection}
        style={{
            backgroundColor: backgroundColor, 
            flexDirection: flexDirection
        }}
    >
        <div className='service-poster' style={{justifyContent: justifyContent, padding: padding}}>
            <div className={`service-poster-borders-1 ${ind === 0 || ind === 1 ? 'round-borders' : ''}`} onMouseEnter={handleOveerlayShow} onMouseLeave={handleOverlayHidden}>
                <img /* onMouseEnter={handleOveerlayShow} onMouseLeave={handleOverlayHidden} */ src={serviceBanner} alt='documentary image'  />
                <div className={`service-card-image-overlay ${ind === 0 || ind === 1 ? 'round-overlay' : '' } ${showOverlay ? 'show-overlay' : ''}`}>
                <div className={`flesh-container ${showOverlay ? 'slide-flash' : ''}`}></div>
                    <p className={`service-overlay-head ${showOverlay ? 'transit-overlay-head' : ''}`}>We Have Completed</p>
                    <h3 className={`services-overlay-project-numbers ${showOverlay ? 'transit-service-overlay-product-completed' : ''}`}>{projectDone}</h3>
                    <span className={`overlay-servicce-name ${showOverlay ? 'transit-service-overlay-name' : ''}`}>
                        <p>{serviceHeading}</p>
                        <p>{serviceHeadingTwo}</p>
                    </span>
                </div>
            </div>
        </div>
        <div className='service-details'>
            <span>
                <h3>{serviceHeading}</h3>
                <h3>{serviceHeadingTwo}</h3>
            </span>
            <p>{paraOne}</p>
            <p>{paraTwo}</p>
        </div>
    </div>
  )
}

export default ServiceCard
