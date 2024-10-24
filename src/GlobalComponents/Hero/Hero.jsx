import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';

const Hero = ({welcomText, mainHeading, heroDesc}) => {
  return (
    <div className='hero-main-section'>
        <iframe
            className="hero-video"
            src="https://player.vimeo.com/video/767309533?api=1&background=1&autoplay=1&loop=1"
            frameBorder="0"
            allow="autoplay fullscreen"
            allowFullScreen
            title="Vimeo Video"
        ></iframe>
        
        <div className="hero-overlay">
            <Navbar />
            <div className='hero-overlay-text'>
                <p>{welcomText}</p>
                <h1>{mainHeading}</h1>
                <p className='hero-desc'>{heroDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
