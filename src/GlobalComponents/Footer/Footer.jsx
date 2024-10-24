import React from 'react'
import './Footer.css'
import footerLogo from '../../Assets/logos/footer-logo.png';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import InputField from '../../ControlledComponents/InputField/InputField';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const footerNav = [
        // {name: 'Services', links: [
        //     {title: 'Video Production', link: '#'},
        //     {title: 'Graphic Design', link: '#'},
        //     {title: 'Advertiseing', link: '#'},
        //     {title: 'Markeeting', link: '#'},
        //     {title: 'Events Management', link: '#'},
        //     {title: 'Markeeting', link: '#'},
        //     {title: 'Event Management', link: '#'},
        // ]},
        {
            name: 'Help Center', links: [
                { title: 'Home', link: '/' },
                { title: 'About Us', link: '/about-us' },
                { title: 'Portfolio', link: '/our-projects' },
                { title: 'Services', link: '/services' },
                { title: 'Contact Us', link: '/contact-us' },
            ]
        },
    ]
    const footerSocialIcons = [
        { link: 'https://www.facebook.com/artproductionLT', icon: <FaFacebookF size={20} /> },
        { link: 'https://www.instagram.com/artproductionlt/?igshid=bu17y5r2z2wy', icon: <FaInstagram size={20} /> },
        { link: 'https://www.linkedin.com/company/artproductionlt', icon: <FaLinkedinIn size={20} /> },
        { link: 'https://www.youtube.com/channel/UCt8enqdB1MK31dC1xAF5JkQ', icon: <FaYoutube size={20} /> },
        { link: 'https://vimeo.com/artproductionlt', icon: <FaVimeoV size={20} /> }
    ]
    return (
        <div className='footer-main-container'>
            <div className='footer-first-section'>
                <div className='footer-signup'>
                    <div className='footer-logo-and-company-name'>
                        <img src={footerLogo} alt='footer-logo' />
                        <div className='footer-company-name'>
                            <p>art</p>
                            <p>production</p>
                            <p>video production</p>
                        </div>
                    </div>
                    <div className='signup-for-newsletter'>
                        <span>
                            <h3>Sign Up for</h3>
                            <p>Newsletter</p>
                        </span>
                       <div className='signup-for-newsletter-field'>
                       <InputField
                            type={'text'}
                            textAlign={'start'}
                            placeholder={'Enter Your Email'}
                            width={'290px'} height={'50px'}
                            borderRadius={'10px'}
                            fontSize={'17px'}
                            lineHeight={'25px'}
                            fontWeight={'600'}
                            color={'#fff'}
                            backgroundColor={"transparent"}
                            padding={"0 10px"}
                        />
                        <PrimeryButton
                            text={'SIGN UP'}
                            width={'148px'}
                            height={'50px'}
                            fontSize={'17px'}
                            lineHeight={'25px'}
                            fontWeight={'600'}
                            color={'#fff'}
                        />
                       </div>
                    </div>
                </div>
                <div className='footer-right-section'>
                    {footerNav.map((items, index) => (
                        <div key={index} className='footer-services-section'>
                            <h3>{items.name}</h3>

                            <div className='footer-nav-links'>
                                {items.links.map((link, index) => (
                                    <a key={index} href={link.link}>{link.title}</a>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className='footer-get-in-touch'>
                        <h3>Get in touch</h3>
                        <div className='footer-contact-details'>
                            <a>+1 (724) 246-4538</a>
                            <a>info@artproduction.net</a>
                            <a>Location, Address, United <br />
                                Arab Emirates
                            </a>
                            <p className='footer-follow'>Follow Us</p>
                            <div className='footer-icons'>
                                {footerSocialIcons.map((items, index) => (
                                    <a key={index} href={items.link}>{items.icon}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy-rights-section'>
                <div className='footer-copy-left-section'>
                    <FaRegCopyright size={10} />
                    <p>2024 Art Production - All Rights Reserved</p>
                </div>
                <div className='footer-copy-right-section'>
                    <a href='#'>Terms & Conditions</a>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
