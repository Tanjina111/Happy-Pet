import React from 'react';
import { Link } from 'react-router-dom';
import Errors from './error.jpg';

const PageError = () => {
    return (
        <div>

            {/* Not found img */}
            <img className='img-fluid my-4' src={Errors} alt="" />

            {/* Back to home button */}
            <div className='mb-4'>
            <Link to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default PageError;