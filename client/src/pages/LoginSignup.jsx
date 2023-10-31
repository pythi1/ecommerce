import React, { useState } from 'react';
import "./CSS/loginsignup.css"
import { Link } from 'react-router-dom';

const LoginSignup = () => {

  const [change , setchange] = useState("login");

  const Signup = () => {
    setchange("signup")
  }

  const Login = () => {
    setchange("login")
  }

  return (
    <div className='login-signup' >
      <div className='loginsignup-container' >

        {change==="login" ? <h1>Login</h1> : <h1>Sign up</h1>}

        {change==="login" 
        ?
        <div className='loginsignup-fields' >
          <input type='email' placeholder='Enter Email' /><br />
          <input type='password' placeholder='Enter Password' />
        </div>
        :
        <div className='loginsignup-fields' >
          <input type="text" placeholder='First Name' /><br />
          <input type='email' placeholder='Enter Email' /><br />
          <input type='password' placeholder='Enter Password' />
        </div>
        }

        {/* <div className='loginsignup-fields' >
          <input type="text" placeholder='First Name' /><br />
          <input type='email' placeholder='Enter Email' /><br />
          <input type='password' placeholder='Enter Password' />
        </div> */}

        {change==="login" ?<Link to={"/"} > <button>Login</button> </Link> : <button onClick={Login} > Create Account</button>}
        {change==="login" ? <p className='loginsignup-login' > Don't have an account <span onClick={Signup}>SIGN UP.</span>  </p> : <p className='loginsignup-login' > I have an account <span onClick={Login}>LOG IN.</span>  </p> }
        <div className='loginsignup-agree' >
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup;





// hello kishan,  you  are very aandha , keep eating green veg and green chilly 