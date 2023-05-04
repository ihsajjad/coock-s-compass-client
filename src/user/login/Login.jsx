import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContext } from '../../shared/toast/ToastProvider';



const Login = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const {loginUser, googleSignIn, gitHubSignIn, passwordReset} = useContext(AuthContext);
    const handleToast = useContext(ToastContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    console.log(from)

    // Login with email and password functionality
    const handleSignIn = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setEmail(email)
        form.reset();

        if(password.length < 6){
            return setError('password should have minimum 6 Characters')
        }

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
            handleToast(`Welcome ${loggedUser.displayName === null && ''}`, 'You have signed in successfully.', 'success')
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // Google login functionality
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser.displayName)
            navigate(from, {replace: true})
            handleToast(`Welcome ${loggedUser.displayName}`, 'You have successfully signed in with Google.', 'success')
        })
        .catch(error=> {
            console.log(error.message);
        })
    }

    // GitHub login functionality 
    const handleGitHubLogin = () => {
        gitHubSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
            handleToast(`Welcome ${loggedUser.displayName}`, 'You have successfully signed in with GitHub.', 'success')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    // Password reset system
    const handlePasswordReset = ()=>{
        passwordReset(email)
        .then()
        .catch(error => setError(error.message))
    }

    
    
    return (
        <div className="min-h-screen bg-amber-50 w-full py-12 px-3">
            <form onSubmit={handleSignIn} className="rounded-lg p-5 lg:w-1/3 w-full mx-auto shadow-2xl bg-base-100 my-10 border-2 border-amber-300">
                <h2 className='text-2xl font-bold text-center mt-5 text-amber-400 border-b-4 border-amber-300 pb-3 mx-8'>Please Login</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered border-amber-300"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered border-amber-300" />
                        <p className='text-red-500'>{error}</p>
                        <label className="label">
                            <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="custom-btn">Login</button>
                    </div>
                    <p>New at Cook's Compass? Please <Link to='/register' className="link link-primary">Register</Link></p>
                </div>
                <div className='text-center'>
                    <h3>Login with</h3>
                    <hr className='border border-slate-300 my-3 w-3/4 mx-auto' />
                    <div className='flex items-center justify-center gap-5 mb-4 '>
                        <div onClick={handleGoogleLogin} className="custom-btn ">
                            <FaGoogle className='text-2xl mr-3'/><span> Google</span>
                        </div>
                        <div onClick={handleGitHubLogin} className="custom-btn"><FaGithub  className='text-2xl mr-3'/><span>Github</span></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;