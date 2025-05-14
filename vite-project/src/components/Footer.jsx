import React, { useState, useEffect } from 'react';
import logo from '../assets/logo urbanfood.png';
import assets from '../assets/facebook_icon.png';
import assets2 from '../assets/twitter_icon.png';
import assets3 from '../assets/linkedin_icon.png';
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth",
        })
    }
    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    })

    return (
        <>
            <div className='footer' id='footer'>
                <div className='footer-content'>
                    <div className='footer-content-left'>
                        <img className='footer-logo' src={logo} alt='logo' />
                        <p>UrbanFood: Your go-to platform for ordering delicious food from local restaurants and eateries. Browse through a wide range of cuisines, discover new favorites, and get food delivered right to your doorstep. With easy ordering, UrbanFood makes satisfying your cravings a breeze.</p>
                        <div className='footer-social-icons'>
                            <ul className='flex gap-4'>
                                <li> <img src={assets} alt='facebook-logo' className='facebook-logo' /></li>
                                <li><img src={assets2} alt='twitter-logo' className='twitter-logo' /></li>
                                <li> <img src={assets3} alt='linkedin-logo' className='linkedin-logo' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-content-center'>
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className='footer-content-right'>
                        <h2>Get in touch</h2>
                        <ul>
                            <li>+1-212-456-7890</li>
                            <li>urbanfood@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='footer-copyright'>Copyright 2024 © urbanfood.com - All Right Reserved. </p>

            </div>
            {isVisible && (
                <div className='scroll-top' onClick={scrollTop}>
                    <FaArrowCircleUp style={{ height: "50px", width: "50px", backgroundColor: "tomato", borderRadius: "50%" }} />
                </div>
            )}

        </>
    )
}

export default Footer;