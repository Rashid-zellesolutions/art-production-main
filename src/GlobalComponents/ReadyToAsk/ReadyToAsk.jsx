import React from "react";
import "./style.css";
import MainHeading from "../Utils/mainHeading";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";
import { useNavigate } from "react-router-dom";

export default function ReadyToAsk() {
    const navigate = useNavigate();
    const navigateToContactPage = () => {
        navigate(`/contact-us`)
    }
    return(
        <div className="readyToAsk">
            <MainHeading margin={"0"} content1={"Ready to work "} content2={"with us ?"} />
            <PrimeryButton 
                text={'Get Started Today'} 
                width={'280px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
                arrowTrue={true}
                navigateClick={navigateToContactPage}
            />
        </div>
    )
}
