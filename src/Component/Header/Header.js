import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';
import Image from './pet.jpg'

const Header = () => {
    const {user, logOut} = useAuth();

    return (

        // Navbar
        <div>
            <nav className="navbar navbar-light">
            <div className="container-fluid d-flex justify-content-between">

                {/* Left Side */}
            <div className="d-flex col-lg-4 col-md-5 col-sm">
            <img className='img-fluid' src={Image} alt="" />
            <div className='mx-2 my-auto text-start text-white'>
            <h4>Happy<br />Pet</h4>
            <p>The best choice for your<br />pets healthcare.</p>
            </div>
            </div>

            {/* Right Side */}
            <div className='d-flex col-lg-4 col-md-5 col-sm'>
            <NavLink className='m-4 text-decoration-none text-white navs' to="/">Home</NavLink>
            <NavLink className='m-4 text-decoration-none text-white navs' to="/vet">Vets</NavLink>
            <NavLink className='m-4 text-decoration-none text-white navs' to="/about">About</NavLink>
            {user.email && <span className='d-flex align-items-center fw-bolder pe-1' style={{color: 'white'}}> {user.displayName}</span>}
                {
                    user.email ?
                    <button className='btn btn-warning' onClick={logOut}>Logout</button>
                    :
                    <NavLink className='m-4 text-decoration-none text-white navs' to="/login">Login</NavLink>
                }
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;