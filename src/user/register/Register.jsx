import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, setNameAndPhoto} = useContext(AuthContext);



    const handleCreateUser = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        form.reset();

        // Password validation
        if(password !== confirm){
            return setError("Password doesn't matched");
        } else if(password.length < 6){
            return setError('password should have minimum 6 Characters');
        } else if(!/^(?=.*[0-9])/.test(password)){
            return setError('Password should have minimum one Number');
        } else if(!/(?=.*[A-Z])/.test(password)){
            return setError("Password should have minimum one Capital letter");
        }

        /* else if(!/(?=.*[!@#$%^&*])/.test(password)){
            return setError("Password should have minimum one Special Character");
        } */

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            createdUser.displayName = name;
            createdUser.photoURL = photo;
            
            const nameAndPhoto = {
                displayName : name,
                photoURL : photo
            }

            setNameAndPhoto(nameAndPhoto)
            .then(result => {})
            .catch(error => console.log(error.message))
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div className="min-h-screen bg-base-200 w-full py-12 px-3">
            <form onSubmit={handleCreateUser} className="rounded-lg p-5 lg:w-1/3 w-full mx-auto shadow-2xl bg-base-100 my-10">
                <h2 className='text-2xl font-bold text-center my-5'>Please Register</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                        <label className="label">
                            <p className='text-red-500'>{error}</p>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an Account? Please <Link to='/login' className="link link-primary">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;