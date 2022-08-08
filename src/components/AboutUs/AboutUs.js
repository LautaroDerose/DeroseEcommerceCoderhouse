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
                        <img src="https://i.postimg.cc/k4Kbky3G/ash-edmonds-Koxa-GX-5zs-unsplash.jpg"></img>
                        <h3>Best Product Sellers</h3>
                    </div>
                    <div className="content">
                        <h3>Why choose us?</h3>
                        <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro</p>
                        <br/>
                        <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
                        <a href="#" className="btn-extra">Learn more</a>
                    </div>
                </div>
            </section>
        </>
    )   
}

export default AboutUs

//     <div className="about-body">
            
    //         <div className="title-container">
    //         {/* <div className="about-img"><img src={aboutBackground} /></div> */}
    //             <div className="blur">
    //                 <div></div>
    //                 <div className="about-title">
    //                     <div>
    //                     <h1>About Us</h1>
    //                     <p>Descpription</p>
    //                     </div>
    //                 </div>
    //                 <div></div>
    //             </div>
    //         </div>
    //         <div className="team-container">
    //             <div className="about-item"><p>Quienes somos?</p></div>
    //             <div className="about-item"><p>Trayectoria</p></div>
    //             <div className="about-item"><p>Partners</p></div>
                
    //         </div>     
    //     </div>
    // )