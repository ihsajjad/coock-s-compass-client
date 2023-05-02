import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-base-200 w-full py-12 px-3">
            <form className="rounded-lg p-5 lg:w-1/3 w-full mx-auto shadow-2xl bg-base-100 my-10">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>New at Cook's Compass? Please <Link to='/register' class="link link-primary">Register</Link></p>
                </div>
                <div className='text-center'>
                    <h3>Login with</h3>
                    <hr className='border border-slate-300 my-3 w-3/4 mx-auto' />
                    <div className='flex items-center justify-center gap-5 mb-4'>
                        <div className="btn btn-primary">
                            <FaGoogle className='text-2xl mr-3'/><span> Google</span>
                        </div>
                        <div className="btn btn-primary"><FaGithub  className='text-2xl mr-3'/><span>Github</span></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;