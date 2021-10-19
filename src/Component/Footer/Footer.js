import React from 'react';

const Footer = () => {
    return (

        // Footer
        <div style={{backgroundColor: 'darkslateblue'}} className='p-3 position-sticky'>
            <p className='text-light'>Enter your E-mail address for subscription</p>
            <div className='d-flex align-items-center justify-content-center'>
            <input className='w-50 p-1 m-1' type="email" name="" id="" placeholder='E-Mail'/>
            <button type="submit" className='btn btn-primary'>Subscribe</button>
            </div>
            <small className='text-light py-2'>Copyright by Tanjina Arin 2021</small>
        </div>
    );
};

export default Footer;