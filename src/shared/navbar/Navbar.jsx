import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../user/login/Login';
import Register from '../../user/register/Register';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-20">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Cook's Compass</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><Link to='/'>Home</Link ></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>
                            <img className="w-10" 
                            style={{padding: '0', borderRadius: '50%'}} src="https://images.unsplash.com/photo-1682794496831-81a52c8e9136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
                            <button>Log Out</button>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;