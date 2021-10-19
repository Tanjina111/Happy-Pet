import React from 'react';
import { useParams } from 'react-router';
import Pet from './pet.jpg'

const Detail = (props) => {
    const { phoneNo } = useParams();
    const { image, detail } = props.service;
    return (
        <div>
        <div className="col-md-6 py-5 px-1 text-start">
            <img src={image} className="img-fluid rounded" alt="..." />
            <p className="card-text">{detail}</p>
            <p>Phone: {phoneNo}</p>
            </div>

            {/* Banner */}
        <div>
            <img className="img-fluid" src={Pet} alt="" />
        </div>
            </div>
    );
};

export default Detail;