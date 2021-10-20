import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './about.jpg'
import Food from './food.jpg'

const About = () => {
    return (

        <div className="card mb-3 container border border-rounded shadow my-3 d-flex justify-content-between">

            {/* Service System Detail */}

            <div className="row">
                <img src={Banner} alt="" />
            </div>
        <div className="row g-0 d-flex justify-content-between">
            <div className="col-md-5 p-3 border-end">
            <div className="card-body text-start py-3">
                <p className="card-text">Our services are organised to help you with your pets health. Here you may get total <span  className='text-danger'>6</span> types of animal healthcare services. The best vets are here to help you make a easier way to keep your pet in a perfect diet. We will also provide you the chances to communicate with our vets regularly. <br />So, join now and <span className='text-danger'>subscribe</span> to follow us.</p>
                <div className='my-3'>
                <h6>Our Hotline: <span className='text-danger'>0123456789</span></h6>
                <h6>E-MAil: <span className='text-danger'>abcdefgh@pet.com</span></h6>
                <h6>Address: <span className='text-danger'>Abcd, Road- 1, Dhaka</span></h6>
                </div>
            </div>
            </div>

            {/* Pet Food */}
            <div className="col-md-6 py-5 px-1 text-end">
            <p className="card-text">Here you can also get the best food and medicines for your pet. We also provide their toys which suits them and keep them delightful.</p>
            <img src={Food} className="img-fluid rounded" alt="..." />
            </div>
        </div>

        {/* Button Back To Home */}
        <Link  to='/'><button className='btn btn-primary my-3'>Back To Home</button></Link> 
        </div>
        
    );
};

export default About;