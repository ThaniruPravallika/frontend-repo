import React from 'react';
import './CSS/loginSignup.css';
const  loginSignup= () => {
    return (
        <div className='loginSignup'>
            <div className="loginsignup-container">
                <h1>SIGN UP</h1>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder='Your name'/>
                    <input type="email" placeholder='Email address'/>
                    <input type="password" placeholder='password'/>
                
                <button>Continue</button></div>
                <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing i agree to terms of use and privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default loginSignup ;