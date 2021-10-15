import {getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../Firebase/FirebaseInitalize';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
firebaseInitialize();



const UseFirebase = () => {
    
    const auth = getAuth();
    const [ error, setError ] = useState('');
    const [ user, setUser ] = useState({});

    const googleSignIn = () => {

      signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signWithFacebook = () => {

      signInWithPopup(auth, facebookProvider)
            .then(result => {
                setError(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
            setUser({});
        }
      });
},[])


      const LogOut = () => {
      
        signOut(auth)
         .then(()=>{
             setUser({})
         })
      }


return {
    googleSignIn,
    LogOut,
    user,
    error,
    signWithFacebook
}


}

export default UseFirebase;
