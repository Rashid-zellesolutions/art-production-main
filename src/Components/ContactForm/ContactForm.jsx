import React from 'react'
import './ContactForm.css';
import InputField from '../../ControlledComponents/InputField/InputField'
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";

const ContactForm = ({titleOne, titleTwo}) => {
    const socialIcons = [
        {link: 'https://www.facebook.com/artproductionLT', icon: <FaFacebookF size={20} />}, 
        {link: 'https://www.instagram.com/artproductionlt/?igshid=bu17y5r2z2wy', icon: <FaInstagram size={20} />}, 
        {link: 'https://x.com/ArtProductionLT', icon: <FaTwitter size={20} />}, 
        {link: 'https://www.linkedin.com/company/artproductionlt', icon: <FaLinkedinIn size={20} />}, 
        {link: 'https://www.youtube.com/channel/UCt8enqdB1MK31dC1xAF5JkQ', icon: <FaYoutube size={20} />}, 
        {link: 'https://vimeo.com/artproductionlt', icon: <FaVimeoV size={20} />} 
    ]
  return (
    <div className='contact-us-main-div'>
        <div className='contact-left-section'>
            <h3 className='contact-heading'> {titleOne} <span> {titleTwo} </span></h3>
            <p className='contact-desc'>
                Explore exciting opportunities for video production, documentaries, 
                commercials, and digital media projects. We're always open to innovative 
                collaborations and commercial ventures.
            </p>
            <h3 className='contact-follow'>Connect with us on <span>Social Media</span></h3>
            <div className='contact-social-icons'>
                {socialIcons.map((items, index) => (
                    <a href={items.link}>{items.icon}</a>
                ))}
            </div>
        </div>
        <div className='contact-right-section'>
            <InputField 
                type={'text'} 
                placeholder={'Full Name'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <InputField 
                type={'text'} 
                placeholder={'Email Address'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <InputField 
                type={'text'} 
                placeholder={'Phone Number'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <InputField 
                type={'text'} 
                placeholder={'Subject'}
                width={'425px'}
                height={'50px'}
                textAlign={'start'}
                padding={'12px 23px 3px 23px'}
                fontSize={'18px'}
                lineHeight={'27px'}
                fontWeight={'600'}
                color={'#fff'}
                borderRadius={'10px'}
            />
            <textarea rows={3} placeholder='Your Message Here' className='text-message' />
            <PrimeryButton 
                text={'SUBMIT'} 
                width={'182px'} 
                height={'50px'} 
                padding={'2px 10px'}
                fontSize={'17px'}
                lineHeight={'25px'}
                fontWeight={'600'}
                color={'#fff'}
                arrowTrue={false}
            />
        </div>
    </div>
  )
}

export default ContactForm
