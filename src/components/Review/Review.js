import React from 'react'
import { FaQuoteRight, FaStar, FaStarHalf } from 'react-icons/fa'
import "./Review.css"

const Review = () => {
    return (
        <>
        <section className="review" id="review">
        <h1 className="heading">Customer's <span>review</span></h1>
        <div className="box-container">
            <div className="box">
                <div className="stars">
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStarHalf/></i>
                </div>
                <p>Lorem ipsum dolor sit amet. Eos architecto unde At enim mollitia ut consequuntur obcaecati! Non consequatur voluptatibus quo fuga exercitationem est maxime voluptas dolor voluptate ea natus porro. Quo distinctio autem et accusantium sunt eum molestiae delectus.</p>
                <div className="user">
                    <img src="https://i.postimg.cc/fkMKBRLH/charles-buchler-C6-Gj-BAOt-Zc-unsplash.jpg" alt="" />
                    <div className="user-info">
                        <h3>User 1</h3>
                        <span>happy customer</span>
                    </div>
                </div>
                <span className="fas fa-quote-right"><FaQuoteRight/></span>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStarHalf/></i>
                </div>
                <p>Lorem ipsum dolor sit amet. Eos architecto unde At enim mollitia ut consequuntur obcaecati! Non consequatur voluptatibus quo fuga exercitationem est maxime voluptas dolor voluptate ea natus porro. Quo distinctio autem et accusantium sunt eum molestiae delectus.</p>
                <div className="user">
                <img src="https://i.postimg.cc/H8W9xBRG/joao-paulo-de-souza-oliveira-ZHKKg9ln-CSk-unsplash.jpg" alt="" />
                    <div className="user-info">
                        <h3>User 1</h3>
                        <span>happy customer</span>
                    </div>
                </div>
                <span className="fas fa-quote-right"><FaQuoteRight/></span>
            </div>
            <div className="box">
                <div className="stars">
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStar/></i>
                    <i className="fas fa-stars"><FaStarHalf/></i>
                </div>
                <p>Lorem ipsum dolor sit amet. Eos architecto unde At enim mollitia ut consequuntur obcaecati! Non consequatur voluptatibus quo fuga exercitationem est maxime voluptas dolor voluptate ea natus porro. Quo distinctio autem et accusantium sunt eum molestiae delectus.</p>
                <div className="user">
                <img src="https://i.postimg.cc/BjjNH764/thai-an-z-Ta-HFYu-QPZM-unsplash.jpg" alt="" />
                    <div className="user-info">
                        <h3>User 1</h3>
                        <span>happy customer</span>
                    </div>
                </div>
                <span className="fas fa-quote-right"><FaQuoteRight/></span>
            </div>
        </div>
        </section>  
        </>
    )
}

export default Review

