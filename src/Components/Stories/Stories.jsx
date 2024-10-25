import React from 'react'
import './Stories.css'
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
// import arrowLeft from '../../Assets/icons/arrow-left-white.png';
// import arrowRight from '../../Assets/icons/arrow-white-right.png';

const Stories = () => {

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
        <div className='stories-main-container'>
            <div className='stories-heading-section'>
                <h3>Stories that Make <span>Us Smile!</span></h3>
            </div>
            <div >
                {storiesData.map((items, index) => (
                    <div className='stories-card'>
                        <img src={items.logo} alt='logo' />
                        <p>{items.post}</p>
                        <div>
                            <h3>{items.name}</h3>
                            <p>{items.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stories
