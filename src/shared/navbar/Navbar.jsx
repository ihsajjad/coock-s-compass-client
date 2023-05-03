import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-20">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Cook's Compass</a>
                </div>
                <div className="flex-none">
                    <ul className="flex items-center justify-center space-x-5">
                        <Link to='/'>Home</Link >
                        <Link to='/blog'>Blog</Link>
                        {

                            user
                                ? 
                                    <><button onClick={handleLogOut}>Log Out</button>
                                    <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName || 'Profile'}`}>
                                        <img className="w-10 h-10"
                                            style={{ padding: '0', borderRadius: '50%' }} src={`${user.photoURL || 'https://i.postimg.cc/d1bNpF8n/user-solid.png'}`}
                                            />
                                    </div></>

                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                  </>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;