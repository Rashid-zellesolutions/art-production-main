import React from "react";
import "./style.css";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";

export default function ServiceCard2() {
    return(
        <div className="service-name-2">
            <div className="content_section">
                <p>
                    <span style={{fontWeight:"bold"}}>Founded in 2004, Art Production® is an award-winning media production company,</span> dedicated to transforming ideas into impactful stories that inspire and captivate audiences worldwide. We specialize in creating innovative and compelling content—whether it's documentaries, commercials, or live events—ensuring that every project leaves a lasting impression.
                </p>
                <PrimeryButton 
                    text={'Get Started Today'} 
                    width={'280px'} 
                    height={'55px'}
                    fontSize={'18px'}
                    lineHeight={'22px'}
                    fontWeight={'400'}
                    color={'#fff'}
                    arrowTrue={true}
                />
            </div>
            <div className="service-poster-2">
                .
            </div>
        </div>
    )
}