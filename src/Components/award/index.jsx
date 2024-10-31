import React from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import awardImg from "../../Assets/award.png"

export default function Award() {
    return(
        <div className="award">
            <MainHeading width={'95%'} flexDirection={'column'} align={"center"} content1={"We're proud to get rewareded in Cannes Corporate Media"} content2={" and TV 2022 Awards"} />
            <img src={awardImg} alt="" srcset="" />
            <p>We got rewarded the silver dolphin in the best Decodrama category for our film "Struggle for Survival" in 2022</p>
        </div>
    )
}