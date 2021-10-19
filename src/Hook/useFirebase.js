import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,  signOut } from 'firebase/auth';
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})})
            .finally(() => setIsLoading(false));
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if ( user ){ 
                setUser(user);
            }
            else{

            }
            setIsLoading(false);
        })
    }, [])


    return {
        user,
        signInUsingGoogle,
        isLoading,
        logOut
    }
}

export default useFirebase;