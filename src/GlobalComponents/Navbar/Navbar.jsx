import React, { useState, useEffect } from 'react'
import './Navbar.css';
import logo from '../../Assets/logos/logo.png'
import humbergerIcon from '../../Assets/icons/humberger-icon.png';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import { useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const [navOpen, setNavOpen] = useState(false);
    const handleNavActive = (index) => {setIsActive(index)}
    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about-us'},
        {name: 'Portfolio', link: '/our-projects'},
        {name: 'Services', link: '/services'},
        // {name: 'Vemeo', link: '/vemeo-videos'},
    ]
    const location = useLocation()
    const navigate = useNavigate()
    const navigateToContact = () => {
        navigate(`/contact-us`)
    }
    useEffect(() => {
        const currentIndex = navLinks.findIndex(item => item.link === location.pathname);
        setIsActive(currentIndex !== -1 ? currentIndex : 0); // Default to first item if not found
    }, [location.pathname, navLinks]); // Runs every time the pathname changes

    const handleNavOpen = () => {
        setNavOpen(true)
    }
    const handleNavClose = () => {
        setNavOpen(false)
    }
  return (
    <div className='navbar-main-container'>
        <div className='navbar-inner-container'>
            <div className='navbar-logo-section'>
                <a href='/'>
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className='navbar-links-section'>
                {navLinks.map((items, index) => (
                    <a 
                        href={items.link} 
                        className={`navbar-link-anchor ${isActive === index ? 'navbar-link-active-anchor' : ''}`} 
                        onClick={() => handleNavActive(index)} 
                    >
                        {items.name}
                    </a>
                ))}
            </div>
            <div className='navbar-contact-btn-section'>
                <PrimeryButton 
                    text={'Contact Us'} 
                    width={'173px'} 
                    height={'50px'}
                    fontSize={'18px'}
                    lineHeight={'22px'}
                    fontWeight={'400'}
                    color={'#fff'} 
                    navigateClick={navigateToContact}
                />
            </div>
        </div>
        <div className='mobile-navbar-inner-container'>
            <img src={logo} alt='main logo' className='mobile-main-logo' />
            <img src={humbergerIcon} alt='nav-toggle' className='mobile-humberger-icon' onClick={handleNavActive} />
        </div>
    </div>
  )
}

export default Navbar
