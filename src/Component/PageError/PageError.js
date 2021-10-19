import React from 'react';
import { Link } from 'react-router-dom';
import Errors from './error.jpg';

const PageError = () => {
    return (
        <div>

            {/* Not found img */}
            <img className='img-fluid' src={Errors} alt="" />

            {/* Back to home button */}
            <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default PageError;