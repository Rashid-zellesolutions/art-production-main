import React from 'react'
import './Portfolio.css';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import surviveImage from '../../Assets/portfolio/survival-story-image.png'
import documenteryImage from '../../Assets/portfolio/documentery-image.png'
import videoGRaphyImage from '../../Assets/portfolio/video-graphy.png';
import interviewImage from '../../Assets/portfolio/interview.png';
// import ContactForm from '../../Components/ContactForm/ContactForm';
import ProductCategories from '../../Components/ProductCategory/ProductCategories';
import SingleProject from '../../Components/SingleProject/SingleProject';
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk';

const Portfolio = () => {
  
    const singleProject = [
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: surviveImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: documenteryImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
        {img: videoGRaphyImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The Strugle of Survival'},
        {img: interviewImage, tag: 'Commercial', chanel: 'Al Jazeera', projectTitle: 'The First Documentary'},
    ]
  return (
    <div className='project-main-container'>
        <ProductCategories />
      <div className='projects-display'>
        {singleProject.map((items, index) => (
          <SingleProject 
            tag={items.tag}
            projectImage={items.img}
            chanelName={items.chanel}
            projectTitle={items.projectTitle}
          />
        ))}
      </div>
      <div className='see-all-project-btn-div'>
        <PrimeryButton 
          text={'See All Projects'} 
          width={'243px'} 
          height={'50px'} 
          padding={'4px 15px'}  
          fontSize={'18px'}
          lineHeight={'22px'}
          fontWeight={'400'}
          color={'#fff'}
          arrowTrue={true}
        />
      </div>
      {/* <ContactForm 
        titleOne={`Let's Create and`}
        titleTwo={`Collaborate!`}
      /> */}
      <ReadyToAsk />
    </div>
  )
}

export default Portfolio
