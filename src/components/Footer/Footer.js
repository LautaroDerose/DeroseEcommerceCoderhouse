import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Quick links</h3>
                    <a href='/'>Home</a>
                    <a href='/'>About Us</a>
                    <a href='/'>Products</a>
                    <a href='/'>Review</a>
                    <a href='/'>Contact</a>
                </div>
                <div className="box">
                    <h3>Extra links</h3>
                    <a href='/'>My Account</a>
                    <a href='/'>My Order</a>
                    <a href='/'>My Favorites</a>
                </div>
                <div className="box">
                    <h3>Locations</h3>
                    <a href='/'>Argentina</a>
                    <a href='/'>Mexico</a>
                    <a href='/'>Espana</a>
                    <a href='/'>Brasil</a>
                    <a href='/'>Uruguay</a>
                </div>
                <div className="box">
                    <h3>Contact Info</h3>
                    <a href='/'>+011-345-000</a>
                    <a href='/'>unMail@gmail.com</a>
                    <a href='/'>La Plata, Argentina - 1900</a>
                    <img src="https://i.postimg.cc/Xv6xbN7L/payment.png" alt="visa-mastercard-y-otras-formas-de-pago" />
                </div>
            </div>
            <div className="credit">
                Created by <span>Lautaro Derose</span> | Todos los derechos compartidos
            </div>
        </section>
        </>
    )
}

export default Footer
