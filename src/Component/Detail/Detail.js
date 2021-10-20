import React from 'react';
import { useParams } from 'react-router';
import Pet from './pet.jpg';
import { useEffect, useState } from 'react';

const Detail = () => {
    const { phoneNo } = useParams();

    const [details, setDetails] = useState([]);
    const [service, setService] = useState([]);

  // Get data
    useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setDetails(data.serv))
    }, []);

    useEffect(() => {
        const getDetail = details.find(detail => detail.phone === parseFloat(phoneNo))
        setService(getDetail);
    }, [details])

    // const { image, detail } = details;

    return (
        <div>
        <div className="col-md-6 py-5 px-1 text-start">
            <img src={service?.image} className="img-fluid rounded" alt="..." />
            <p className="card-text">{service?.detail}</p>
            <p>Phone: {service?.phone}</p>
            </div>

            {/* Banner */}
        <div>
            <img className="img-fluid" src={Pet} alt="" />
        </div>
            </div>
    );
};

export default Detail;