import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)

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
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><Link to='/'>Home</Link ></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {

                            user
                                ? <li>
                                    <button onClick={handleLogOut}>Log Out</button>
                                    <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName}`}>
                                        <img className="w-10 h-10"
                                            style={{ padding: '0', borderRadius: '50%' }} src={`${user.photoURL ? user.photoURL : 'https://i.postimg.cc/d1bNpF8n/user-solid.png'}`}
                                            />
                                    </div>
                                </li>
                                : <li>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;