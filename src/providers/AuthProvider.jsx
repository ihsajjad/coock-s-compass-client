import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubProvider = new GithubAuthProvider();
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const authInfo = {

        googleSignIn,
        gitHubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;