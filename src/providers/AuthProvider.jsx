import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // Google Login functionality
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub Login functionality
    const gitHubProvider = new GithubAuthProvider();
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    // Creating User with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {

        googleSignIn,
        gitHubSignIn,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;