import React from 'react';
import './hero.css';
import Hand_icon from '../assets/hand_icon.png';
import Arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
const hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new
                        <img src={Hand_icon} alt=""/>
                        </p></div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={Arrow_icon} alt=""/>  

                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>
        </div>
    );
};

export default hero;