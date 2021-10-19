import React from 'react';

const ShowVet = (props) => {
    const {name, image, phone } = props.data;
    return (
        // Review display
        <div className="col">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">Vet Name: <span className='text-danger'>{name}</span></h5>
            <p className="card-text">Phone: <span className='text-danger'>{phone}</span></p>
        </div>
        </div>
        </div>
    );
};

export default ShowVet;