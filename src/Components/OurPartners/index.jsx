import React from "react";
import "./style.css"
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import ShortDescription from "../../GlobalComponents/Utils/shortDescription";
import logo from "../../Assets/partners/aljazeera.png"

export default function OurPartners() {
    const images = [
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
      
      ];
    return (
        <div className="our_partners">
            <MainHeading align={'center'} width={'95%'} gap={'10px'} flexDirection={'row'} content1={"Our "} content2={"Partners"} />
            <ShortDescription content={"We’ve had the privilege of partnering with top global brands and television channels, delivering impactful stories that resonate. From documentaries to commercials, our work speaks for itself."} />
            <div className="our_partners_logos">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`ind ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}