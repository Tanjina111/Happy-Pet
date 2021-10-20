import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Registration = () => {
    const {signInUsingGoogle, signUpWithPass, error} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');

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

    // Re-Enter Password
    const handlePassReEnter = e => {
        if(pass !== repass){
            setRepass('');
            setPass('');
        }
        else{
            setRepass(e.target.value);
        }
        
    }

    // Register
    const handleReg = e => {
        if(mail && pass && repass){
            if(error){
                setMail('');
                setPass('');
                setRepass('');
                history.push(location.state?.from || '/register');
            }
            else{
                signUpWithPass(mail, pass)
                history.push(location.state?.from || '/login');
            }
        }
    }

    return (
        <div className='container my-3'>
            <div>
                <h2 className='text-primary'>Register</h2>
                <form onSubmit={handleReg}>
                <div className='py-2' style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>

                {/* Input Mail */}
                <input onBlur={handleEmail} className='mt-2' type="text" name="email" placeholder='Enter Mail' required/>
                <br />

                {/* Input Pass */}
                <input onBlur={handlePass} className='mt-2' type="password" name="password" placeholder='Enter Password' required/>
                <br />

                {/* Re-Enter Pass */}
                <input onBlur={handlePassReEnter} className='mt-2' type="password" name="password" placeholder='Re-Enter Password' required/>
                <br />
                <input className='mt-2 btn btn-primary' type="submit" value="Submit" />
                </div><br />
                <p className='text-danger'>{error}</p>
                </form>

                {/* Take To Log In */}
                <p className='mt-4'>Already have an account? <Link to='/login'><button className='btn btn-warning'>Login</button></Link></p>
                <div>You can also sign in with <span className='text-primary'>Google</span></div>
                <button className='my-2 btn btn-warning' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;