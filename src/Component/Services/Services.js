import React from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { image, name, des, phone } = props.data;

    return (
        // Services On Home
        <div className="col">
        <div className="card h-100">
            <img src={image} className="card-img-top img-fluid" alt="" />
        <div className="card-body">
            <h5 className="card-title">Pet Type: <span className='text-danger'>{name}</span></h5>
            <p className="card-text"><span>{des}</span></p>
        </div>

        {/* Get Detail Id */}
        <Link to={`/detail/${phone}`}><button className='btn btn-primary mb-2'>Detail</button></Link>
        </div>
        </div>
    );
};

export default Services;