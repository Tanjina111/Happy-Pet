import React from 'react';
import { useParams } from 'react-router';
import Pet from './pet.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    const { phone } = useParams();

    const [details, setDetails] = useState([]);
    const [service, setService] = useState([]);

  // Get Data
    useEffect(() => {
    fetch('/detail.json')
    .then(res => res.json())
    .then(data => setDetails(data))
    }, []);

    // Compare IDs
    useEffect(() => {
        const getDetail = details.find(detail =>  detail.phone === parseFloat(phone))
        setService(getDetail);        
    }, [details])

    return (
        <div>
        <div className="card col-md-6 py-5 px-1 text-start mx-auto shadow rounded my-4">
            <img src={service?.image} className="img-fluid rounded" alt="..." />
            <div className="card-text text-center mt-2">
            <p>{service?.detail}</p>
            <h6>Phone: <span className='text-danger'>{service?.phone}</span></h6>
            </div>
            </div>
            <Link  to='/'><button className='btn btn-primary mt-2 mb-5'>Back To Home</button></Link>

            {/* Banner */}
        <div>
            <img className="img-fluid" src={Pet} alt="" />
        </div>
            </div>
    );
};

export default Detail;