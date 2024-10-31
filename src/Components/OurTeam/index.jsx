import React from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";
import team1 from "../../Assets/team/img1.png"
import team2 from "../../Assets/team/img2.png"
import team3 from "../../Assets/team/img3.png"

export default function OurTeam() {
    const team = [
        {
            name:"Abdo madkhana",
            designation:"Founder/CEO",
            image:team1
        },
        {
            name:"Abdo madkhana",
            designation:"Founder/CEO",
            image:team2
        },
        {
            name:"Abdo madkhana",
            designation:"Founder/CEO",
            image:team3
        },
      ];
    return (
        <div className="our_team">
            <MainHeading align={'center'} width={'95%'} gap={'10px'} flexDirection={'row'} content1={"Our "} content2={"Team"} />
            <div className="team_members">
                 {
                    team.map(
                        (item, index) => (
                            <div className="team_member">
                            <div className="team_member_img">
                                <img src={item.image} alt="" srcset="" />
                            </div>
                            <h3>{item.name}</h3>
                            <h4>{item.designation}</h4>
                        </div>
                        )
                    )
                 }
            </div>
          
        </div>
    )
}