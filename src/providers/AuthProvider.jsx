import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FaHourglassEnd } from 'react-icons/fa';

const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google Login functionality
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub Login functionality
    const gitHubProvider = new GithubAuthProvider();
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    // Creating User with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Set name and photo in user data
    const setNameAndPhoto = (nameAndPhoto) => {
        return updateProfile(auth.currentUser, nameAndPhoto);
    }

    // change password
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Observing user 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })

        return ()=> { unsubscribe()}
    },[])

    // Log Out
    const logOut = () => {
        return signOut(auth)
    }
    
    const authInfo = {
        user,
        loading,
        googleSignIn,
        gitHubSignIn,
        createUser,
        loginUser,
        setNameAndPhoto,
        passwordReset,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;