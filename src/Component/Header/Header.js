import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();

    // Nav Image
    const image = 'https://yongsan.armymwr.com/application/files/6516/0973/4724/Pet_Care_Center.jpg';
    return (
        // Navbar
        <div>
            <nav className="navbar navbar-light">
            <div className="container-fluid d-flex justify-content-between">
            <div className="d-flex justify-content-between">
            <img className='img-fluid'  width="210" height="100" src={image} alt="" />
            <div className='mx-2 my-auto text-start text-white'>
            <h4>Happy<br />Pet</h4>
            <p>A place where you can get all healthcare services of your pet.</p>
            </div>
            </div>
            <div className='d-flex'>
            <NavLink className='m-4 text-decoration-none text-white navs' to="/">Home</NavLink>
            {user.email && <span className='d-flex align-items-center fw-bolder pe-1' style={{color: 'white'}}> {user.displayName}</span>}
                {
                    user.email ?
                    <button className='btn btn-warning' onClick={logOut}>Logout</button>
                    :
                    <NavLink className='m-4 text-decoration-none text-white navs' to="/login">Login</NavLink>
                }
            {/* <NavLink className='m-4 text-decoration-none text-white navs' to="/login">Log In</NavLink> */}
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;