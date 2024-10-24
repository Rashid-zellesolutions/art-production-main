import React from "react";
import "./style.css";
import Accordian from "../Accordian";
import MainHeading from "../Utils/mainHeading";

export default function FAQs() {
    return(
        <div className="FAQs_section">
            <MainHeading align={"center"} width={"50%"} content1={"Light, Camera, Answers!"} content2={"(FAQs)"} />
            <div className="FAQs">
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
            </div>
        </div>
    )
}