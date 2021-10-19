import { Link, useLocation, useHistory } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import useAuth from '../../Hook/useAuth';
import { useState } from 'react';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            }) 
    } 

    const handleEmail = e => {
        setMail(e.target.value);
    }

    const handlePass = e => {
        setPass(e.target.value);
    }

    const handleLogIn = e => {
        e.preventDefault();
        console.log(mail, pass);
        
        
        createUserWithEmailAndPassword(auth, mail, pass)
        .then(result => {
            history.push(redirect_uri);
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
                <h2 className='text-primary'>Login</h2>
                <form onSubmit={handleLogIn}>
                <div style={{backgroundColor: 'rgba(189, 181, 240, 0.918)'}}>
                <h6 className='mt-2 py-2'>E-mail: </h6>
                <input onBlur={handleEmail} type="text" name="email" required placeholder='Enter Mail'/>

    
                <h6 className='mt-4'>Password: </h6>
                <input onBlur={handlePass} type="password" name="password" required placeholder='Enter Password'/>
                <br />
                
                <input onClick={handleLogIn} className='btn btn-regular my-4' type="submit" value="Submit"/>
                </div>
                </form>
                <p className='my-3'>New user? <Link to='/register'><button className='btn btn-warning'>Create Account</button></Link></p>
                <div>You can also sign in with <span className='text-primary'>Google</span></div>
                <button className='my-2 btn btn-warning' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;