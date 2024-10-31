import React from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import camera from "../../Assets/about/camera.png";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";

export default function AboutUs() {
    return(
        <div className="aboutUs">
           <div className="leftSection">
           <MainHeading width={'95%'} gap={'10px'} flexDirection={'row'} margin={"0 0 0px 0"} content1={"About "} content2={"Us"} />
            <p>
            <span>Founded in 2004, Art Production® is an award-winning media production company</span>, dedicated to transforming ideas into impactful stories that inspire and captivate audiences worldwide. We specialize in creating innovative and compelling contentwhether it's documentaries, commercials, or live events—ensuring that every project leaves a lasting impression...
            </p>
            <PrimeryButton 
                text={'Read More'} 
                width={'180px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
            />
           </div>
           <div className="rightSection">
                <img src={camera} alt="" srcset="" />
           </div>   
        </div>
    )
}