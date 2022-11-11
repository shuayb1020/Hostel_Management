import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';

const Landing = () => {
    return ( 
        
        <div className='welcome'>
        <div className="landing">
          <center>  <img src ={logo} alt="logo" height={100} width={200} /></center>
            <h2>Welcome to TECH-U Hostel Sytem</h2>
            <Link to ='/Registration'> SignUp</Link><br/>
            <a href='/Login'> Login</a>
        </div>
        </div>
     );
}
 
export default Landing;