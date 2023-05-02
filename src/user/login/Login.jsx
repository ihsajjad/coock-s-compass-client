import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const {loginUser} = useContext(AuthContext);


    // Login with email and password functionality
    const handleSignIn = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset();

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className="min-h-screen bg-base-200 w-full py-12 px-3">
            <form onSubmit={handleSignIn} className="rounded-lg p-5 lg:w-1/3 w-full mx-auto shadow-2xl bg-base-100 my-10">
                <h2 className='text-2xl font-bold text-center my-5'>Please Login</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                        <p className='text-red-500'>{error}</p>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>New at Cook's Compass? Please <Link to='/register' className="link link-primary">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;