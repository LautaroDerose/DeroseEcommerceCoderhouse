import React from 'react'
import "./AboutUs.css"


const AboutUs = () => {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading"> <span> about </span> us </h1>
                <div className="row">
                    <div className="video-container">
                        {/* <video src="../../assets/Summer_Forest.mp4" loop autoPlay muted></video> */}
                        <img src="https://i.postimg.cc/66mkjf6R/kari-shea-1-SAnr-Ixw5-OY-unsplash.jpg" alt="imagen de fondo"></img>
                        <h3>Best Product Sellers</h3>
                    </div>
                    <div className="content">
                        <h3>¿Por que elegirnos?</h3>
                        <p>Somos una empresa lider en la venta de productos electronicos en la web desde 2003, y sabemos sarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsasarasa ssarasa lorem sarsa</p>
                        <br/>
                        <p>lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa lorem ipsun sarasa sarasa </p>
                        <a href="/about" className="btn-extra">Leer mas</a>
                    </div>
                </div>
            </section>
        </>
    )   
}

export default AboutUs
