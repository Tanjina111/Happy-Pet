import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowVet from '../ShowVet/ShowVet';
import Banner from './vets-pets.png'

const Vet = () => {
    const [vet, setVet] = useState([]);

    // Get Data
    useEffect(() => {
        fetch('./vet.json')
        .then(res => res.json())
        .then(data => setVet(data));
    }, []);

    return (
        
        <div>
        <div className='mt-3 container '>
            <h4>Some of our best Vets:</h4>

            {/* Data Sent */}
        <div  style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}} className="row row-cols-1 row-cols-md-3 g-4 my-4 pb-4">
            {
                vet.map(vet => <ShowVet
                    key = {vet.phone}
                    data = {vet}></ShowVet>)
            }
        </div>

        {/* Back To Home Button */}
        <Link  to='/'><button className='btn btn-primary mb-3'>Back To Home</button></Link>
        </div>

        {/* Banner */}
        <div>
            <img className='img-fluid' src={Banner} alt="" />
        </div>
        </div>
    );
};

export default Vet;