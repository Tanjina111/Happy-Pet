import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import useAuth from '../../Hook/useAuth';

const Registration = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleEmail = e => {
        setMail(e.target.value);
    }

    const handlePass = e => {
        setPass(e.target.value);
    }

    const handleReg = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, mail, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
        })
    
        .catch(error => {
          setError(error.message);
        })
    }
    return (
        <div className='container my-3'>
            <div>
                <h2 className='text-primary'>Register</h2>
                <form onSubmit={handleReg}>
                <div className='py-2' style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>
                <input onBlur={handleEmail} className='mt-2' type="text" name="email" placeholder='Enter Mail' required/>
                <br />
                <input onBlur={handlePass} className='mt-2' type="password" name="password" placeholder='Enter Password' required/>
                <br />
                <input className='mt-2' type="password" name="password" placeholder='Re-Enter Password' required/>
                <br />
                <input className='mt-2 btn btn-warning' type="submit" value="Submit" />
                </div>
                </form>
                <p className='mt-4'>Already have an account? <Link to='/login'><button className='btn btn-warning'>Login</button></Link></p>
            </div>
        </div>
    );
};

export default Registration;