import React from "react";
import "./style.css";
import logo1 from "../../Assets/logos/partnerlogo 1.png";
import logo2 from "../../Assets/logos/alaraby 1.png";
import logo3 from "../../Assets/logos/orient 2.png";
import logo4 from "../../Assets/logos/aljazeera.png"

export default function WorkedWith() {
    return(
        <div className="mainSection_worked">
            <div className="leftSection_worked">
                Worked With...
            </div>
            <div className="rightSection_worked">
                <div className="worked_companies">
                    <img src={logo1} alt="" srcset="" />
                    <img src={logo2} alt="" srcset="" />
                    <img src={logo3} alt="" srcset="" />
                    <img src={logo4} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}