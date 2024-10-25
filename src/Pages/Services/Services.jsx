import React from 'react'
import './Services.css'
import documentaryImage from '../../Assets/services/documentaries.png'
import interviewImage from '../../Assets/services/interview.png'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import FAQs from '../../GlobalComponents/FAQs'
import ReadyToAsk from '../../GlobalComponents/ReadyToAsk/ReadyToAsk'

const Services = () => {
    const servicesData = [
        {bgColor: 'var(--section-bg)', slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Documentaries', img: interviewImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
                in-depth and informative resource that is a perfect platform to create dialogue. 
                They serve as powerful tools for bringing the important topics to the table in a 
                captivating way that also sparks conversation, and sometimes even social movements`,
        paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
                the result you are looking for. we scout for shooting sets, we look for the best 
                guests, crew, and equipment. During the post-production phase, we take care of every 
                detail like video editing and color grading until the film is published, we market 
                the film on all different platforms on the internet`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Short', serviceNameTwo: 'Films', img: interviewImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '50+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'TV ', serviceNameTwo: 'Films', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
                in-depth and informative resource that is a perfect platform to create dialogue. 
                They serve as powerful tools for bringing the important topics to the table in a 
                captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Promotional ', serviceNameTwo: 'Videos', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Creative ', serviceNameTwo: 'Interview', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
                in-depth and informative resource that is a perfect platform to create dialogue. 
                They serve as powerful tools for bringing the important topics to the table in a 
                captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Video ', serviceNameTwo: 'Production', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Graphic ', serviceNameTwo: 'Design', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Event ', serviceNameTwo: 'Management', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Advertising', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Social Media ', serviceNameTwo: 'Management', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Post ', serviceNameTwo: 'Production', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`,
        paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
            the result you are looking for. we scout for shooting sets, we look for the best 
            guests, crew, and equipment. During the post-production phase, we take care of every 
            detail like video editing and color grading until the film is published, we market 
            the film on all different platforms on the internet`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Productive ', serviceNameTwo: 'Crow', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`,
        paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
            the result you are looking for. we scout for shooting sets, we look for the best 
            guests, crew, and equipment. During the post-production phase, we take care of every 
            detail like video editing and color grading until the film is published, we market 
            the film on all different platforms on the internet`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg)',slide: 'slide-right', padding: '0 0 0 0px', contentJustify: 'start', serviceName: 'Production', serviceNameTwo: 'Equipment', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`,
        paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
            the result you are looking for. we scout for shooting sets, we look for the best 
            guests, crew, and equipment. During the post-production phase, we take care of every 
            detail like video editing and color grading until the film is published, we market 
            the film on all different platforms on the internet`, projectCount: '60+'
        },
        {bgColor: 'var(--section-bg-two)',slide: 'slide-left', padding: '0 120px 0 0', contentJustify: 'end', flexDir: 'row-reverse', serviceName: 'Markeeting', img: documentaryImage, paraOne: `Documentaries have the power to educate. Documentary films are an 
            in-depth and informative resource that is a perfect platform to create dialogue. 
            They serve as powerful tools for bringing the important topics to the table in a 
            captivating way that also sparks conversation, and sometimes even social movements`,
        paraTwo: `We prepare the idea and edit the script, we walk you through each step to ensure 
            the result you are looking for. we scout for shooting sets, we look for the best 
            guests, crew, and equipment. During the post-production phase, we take care of every 
            detail like video editing and color grading until the film is published, we market 
            the film on all different platforms on the internet`, projectCount: '60+'
        },
    ]
  return (
    <div className='services-main-section'>
        {servicesData.map((items, index) => (
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
                projectDone={items.projectCount}
                ind={index}
            />
            
        ))}
        <FAQs />
        <ReadyToAsk />
    </div>
  )
}

export default Services
