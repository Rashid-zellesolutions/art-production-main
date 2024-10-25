import React from "react";
import "./style.css";
import MainHeading from "../../GlobalComponents/Utils/mainHeading";

export default function Marquee1() {
    return (
        <div className="marquee1">
            <MainHeading margin={"0 0 20px 0"} content1={"Our "} content2={"Highlights"} />
            <div className="slider_marquee">
                <div className="video_frame">
                    <video
                        src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4"
                        autoPlay muted loop
                    >
                    </video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/1e2A7OU7TBR3pI5QOeDg8cPUCI.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/tioFfbYDZayFhDa0ksUzRE6jr5k.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/RFoMiPXhXPJrUB5GiUwVKomXjg.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/1e2A7OU7TBR3pI5QOeDg8cPUCI.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">
                    <video src="https://framerusercontent.com/assets/ipJDJDzyGh28f0srj26FErvHFE.mp4" autoPlay muted loop></video>
                </div>
                <div className="video_frame">

                </div>
                <div className="video_frame">

                </div>
                <div className="video_frame">

                </div>
            </div>
        </div>
    )
}