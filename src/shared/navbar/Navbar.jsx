import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }
    return (

        <div className="navbar bg-amber-300 lg:px-20">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Cook's Compass</a>
            </div>
            <div className="flex-none">
                <ul className="flex items-center justify-center space-x-5">
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : ""
                        }
                    >
                        Blog
                    </NavLink>
                    {

                        user
                            ?
                            <>
                                <button onClick={handleLogOut}>Log Out</button>
                                <Link to='/profile'>
                                    <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName || 'Profile'}`}>
                                        <img className="w-10 h-10"
                                            style={{ padding: '0', borderRadius: '50%' }} src={`${user.photoURL || 'https://i.postimg.cc/d1bNpF8n/user-solid.png'}`}
                                        />
                                    </div>
                                </Link>
                            </>

                            : <>
                                <NavLink
                                    to='/login'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Login
                                </NavLink><NavLink
                                    to='/register'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Register
                                </NavLink>
                            </>

                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;