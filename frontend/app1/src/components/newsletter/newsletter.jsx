import React from 'react';
import './newsletter.css';
const newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>Subscribe to our newsletter and stay updated</p>
        <div>
        <input type="email" placeholder='Your emailid'/>
        <button>Subscribe</button>
</div>
</div>
    );
};

export default newsletter;