import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';

import '@glidejs/glide/dist/css/glide.core.min.css';
import './style.css';
import MainHeading from '../../GlobalComponents/Utils/mainHeading';
import alJazeeraLogo from '../../Assets/logos/aljazeera.png';
import img1 from "../../Assets/recent-projects/img1.jpg";
import img2 from "../../Assets/recent-projects/img2.jpg";
import img3 from "../../Assets/recent-projects/img3.jpg";
import play from "../../Assets/recent-projects/ei_play.png";

const storiesData = [
    {
        logo: alJazeeraLogo,
        bg: img1,
        post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana',
        position: 'MANAGER AL JAZEERA'
    },
    {
        logo: alJazeeraLogo,
        bg: img3,
        post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana',
        position: 'MANAGER AL JAZEERA'
    },
    {
        logo: alJazeeraLogo,
        bg: img2,
        post: `The teams that worked on our projects on location and in 
            premise have been very professional and flexible and we always get exactly what 
            we are looking for, if not more`,
        name: 'Abdo Madkhana',
        position: 'MANAGER AL JAZEERA'
    },
];

export default function GlideSlder() {
    const glideRef = useRef(null);

    useEffect(() => {
        glideRef.current = new Glide('.glide', {
            type: 'carousel',
            perView: 1.5,
            gap: 50,
            autoplay: 3000,
            peek: {
                before: 150, // Adjust to show half of the card on the left
                after: 50,  // Adjust to show half of the card on the right
            },
            breakpoints: {
                800: {
                    perView: 1,
                }
            },
        });

        glideRef.current.mount();

        return () => glideRef.current.destroy(); // Cleanup on unmount
    }, []);

    return (
        <div className='mySlider'>
            <MainHeading content1={"Recent "} content2={"Projects"} />
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {storiesData.map((item, index) => (
                            <li className="glide__slide" key={index} style={{ backgroundImage: `url(${item.bg})` }}>
                                <div className="recentProjectsInnerSlider">
                                    <img src={play} alt="" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div data-glide-el="controls">
                    <button data-glide-dir="<" className="glide__arrow glide__arrow--left">‹</button>
                    <button data-glide-dir=">" className="glide__arrow glide__arrow--right">›</button>
                </div>
            </div>
        </div>
    );
}
