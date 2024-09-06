import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'


const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
return(
    <div className='Navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>F&F</p>
            <h1>FASHION & FUSION</h1>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}} to='womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/loginSignup'><button>LOGIN</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
            
            <div className="nav-cart-count">0</div>
        </div>
    </div>
)
}
export default Navbar;

