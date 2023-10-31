import React, { useContext, useState } from 'react';
import "./navbar.css";
import logo from "../Assets/logo.jpg";
import Carticon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../context/shopcontext';

const Navbar = () => {

     const [menu , setmenu] =  useState("shop");
     const {GetTotalCartItem} = useContext(Shopcontext);

  return (
    <div className='navbar' >
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <Link to="/" style={{textDecoration : "none"}} ><p>Shopperr</p></Link>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setmenu("shop")}}><Link to="/" style={{textDecoration : "none"}} >Shop</Link> {menu === "shop" ? <hr/> : null} </li>
            <li onClick={() => {setmenu("mens")}}><Link to="/mens" style={{textDecoration : "none"}} >Mens</Link>{menu === "mens" ? <hr/> : null}</li>
            <li onClick={() => {setmenu("women")}}><Link to="/womens" style={{textDecoration : "none"}} >Womens</Link>{menu === "women" ? <hr/> : null}</li>
            <li onClick={() => {setmenu("kids")}}><Link to="/kids" style={{textDecoration : "none"}} >Kids</Link> {menu === "kids" ? <hr/> : null}</li>
        </ul>

        <div className='nav-login-cart' >
            <Link to="/login" > <button>Login</button> </Link>
           <Link to="/cart" style={{textDecoration : "none"}} >  <Carticon className='login-cart' /> </Link>
            <div className='nav-cart-count' > {GetTotalCartItem()} </div>
            {/* <img src={Carticon} alt='nahi'/> */}
        </div>
    </div>
  )
}

export default Navbar;