import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContext } from '../../shared/toast/ToastProvider';


const Register = () => {
    const [error, setError] = useState('');
    const { createUser, setNameAndPhoto} = useContext(AuthContext);
    const handleToast = useContext(ToastContext);


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
            
            handleToast(`Congratulation ${name}`, 'You have registered successfully.', 'success')

            const nameAndPhoto = {
                displayName : name,
                photoURL : photo
            }

            setNameAndPhoto(nameAndPhoto)
            .then(result => {})
            .catch(error => console.log(error.message))
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div className="min-h-screen bg-amber-50 w-full py-12 px-3">
            <form onSubmit={handleCreateUser} className="rounded-lg p-5 lg:w-1/3 w-full mx-auto shadow-2xl bg-base-100 my-10 border-2 border-amber-300">
                <h2 className='text-2xl font-bold text-center mt-5 border-b-4 border-amber-400 mx-8 pb-3 text-amber-400'>Please Register</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered border-amber-300" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered border-amber-300" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered border-amber-300" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your Password" className="input input-bordered border-amber-300" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered border-amber-300" required />
                        <label className="label">
                            <p className='text-red-500'>{error}</p>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="custom-btn">Register</button>
                    </div>
                    <p>Already have an Account? Please <Link to='/login' className="link link-primary">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;