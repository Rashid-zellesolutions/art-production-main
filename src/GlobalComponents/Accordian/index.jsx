import React, { useState } from "react";
import "./style.css";
import arrow from "../../Assets/ei_arrow-up.png";

export default function Accordian({question,answer}) {
    // State to track if the accordion is open
    const [isOpen, setIsOpen] = useState(false);

    // Toggle accordion open state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordian ${isOpen ? "rotate" : ""}`} onClick={toggleAccordion}>

            <div className={`arrow ${isOpen ? "rotate" : ""}`}>
                <img src={arrow} alt="arrow" />
            </div>
            <p className="question">How much does video production cost?</p>
            <p className="answer">How much does video production cost How much does video production cost How much does video production cost How much does video production cost </p>
        </div>
    );
}
