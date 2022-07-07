import React from 'react'
import aboutBackground from "../../assets/rod-long-7Csefv0S--Q-unsplash.jpg"
import "./AboutUs.css"


const AboutUs = () => {
    return (
        <div className="about-body">
            
            <div className="title-container">
            {/* <div className="about-img"><img src={aboutBackground} /></div> */}
                <div className="blur">
                    <div></div>
                    <div className="about-title">
                        <div>
                        <h1>About Us</h1>
                        <p>Descpription</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="team-container">
                <div className="about-item"><p>Quienes somos?</p></div>
                <div className="about-item"><p>Trayectoria</p></div>
                <div className="about-item"><p>Partners</p></div>
                
            </div>     
        </div>
    )
}

export default AboutUs
