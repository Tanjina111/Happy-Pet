import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import React, { useState } from 'react';

const Login = () => {
    const {signInUsingGoogle, signUpWithPass, error} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    // Google Log In
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/home');
            }) 
    } 

    // Get Mail Address
    const handleEmail = e => {
        setMail(e.target.value);
    }

    // Get Password
    const handlePass = e => {
        setPass(e.target.value);
    }

    // Log In
    const handleLogIn = e => {
        if(mail && pass){
            if(error){
                setMail('');
                setPass('');
                history.push(location.state?.from || '/login');
            }
            else{
                signUpWithPass(mail, pass)
                history.push(location.state?.from || '/home');
            }
        }
        
    }

    return (
        <div className='container my-3'>
            <div>
                <h2 className='text-primary'>Login</h2>
                <form onSubmit={handleLogIn}>
                <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>

                {/* Input Mail */}
                <h6 className='mt-2 py-2'>E-mail: </h6>
                <input onBlur={handleEmail} type="text" name="email" required placeholder='Enter Mail'/>

                {/* Input Password */}
                <h6 className='mt-4'>Password: </h6>
                <input onBlur={handlePass} type="password" name="password" required placeholder='Enter Password'/>
                <br />
                
                {/* Log In */}
                <input onClick={handleLogIn} className='btn btn-primary my-4' type="submit" value="Submit"/><br />
                <p className='text-danger'>{error}</p>
                </div>
                </form>

                {/* Take To Reg */}
                <p className='my-3'>New user? <Link to='/register'><button className='btn btn-warning'>Create Account</button></Link></p>
                <div>You can also sign in with <span className='text-primary'>Google</span></div>
                <button className='my-2 btn btn-warning' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;