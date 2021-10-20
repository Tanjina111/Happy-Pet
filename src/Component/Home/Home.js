import Services from '../Services/Services';
import Pets from './pets.png'
import Chuky from './chuky.jpg'
import './Home.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [service, setService] = useState([]);

  // Get Data
    useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setService(data));
    }, []);

    return (
        <>
        <div className='mt-1'>
            {/* First part */}
        <div className="text-light text-start bg-img d-flex align-items-center">
            <h1 className='p-3 ps-5 text-start'>Are you worried<br />about your<br />pet's health?<br />
                Then yes!!<br />This is your place<br />to get rid of it!!</h1>
        </div>

        {/* Second part */}
        <div className='container my-4'>
        <h4 className='text-danger'>Our provided services:</h4>
        <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}} className="row row-cols-1 row-cols-md-3 g-4 my-2 pb-3">
        {
            service.map(services => <Services
                key = {services.phone}
                data = {services}
                ></Services>)
        }
        <h6 className='mx-auto'>Check more <Link  to='/about'><button className='btn btn-warning'>About Us</button></Link></h6>
        </div>
        </div>

        {/* Third Part */}
        <div>
            <img className='img-fluid' src={Pets} alt="" />
        </div>

        {/* Fourth Part */}
        <div className='card d-flex shadow rounded m-5'>
            <div className='row'>
            <div className='col-md-5 p-3'>
                <img src={Chuky} alt="" />
            </div>
            <div className='col-md-5 p-3 my-auto'>
            <div>
            <p>Meet <span className='fw-bold text-danger'>Chuky</span>. He is our regular visitor. He gets vaccinated in time. He maintains the regular diet routine provided by us. He is a healthy cat.</p>
            </div>
            <div>
            <Link  to='/vet'><button className='btn btn-primary'>Our Vets</button></Link>
            </div></div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Home;