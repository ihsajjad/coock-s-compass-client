import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Spinner from '../../shared/spinner/Spinner';
import { ToastContext } from '../../shared/toast/ToastProvider';

const Profile = () => {
    const { user, loading, setNameAndPhoto } = useContext(AuthContext);
    const handleToast = useContext(ToastContext);
    if (loading) {
        return <Spinner />
    }

    const { photoURL, displayName, email } = user;

    const updateUserInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const userInfo = {
            displayName: name,
            photoURL: photo
        }

        setNameAndPhoto(userInfo)
            .then(result => {
                handleToast(`Successfully Updated`, 'You have changed your profile info.', 'success')
            })
            .catch(error => console.log(error.message));
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            
            <div className='text-center space-y-4'>
                <img className='w-80 h-auto' src={photoURL || 'https://i.postimg.cc/d1bNpF8n/user-solid.png'} alt="" />
                <h3 className='text-2xl text-center'>{displayName}</h3>
                <p>{email}</p>
                <label htmlFor="my-modal-6" className=" custom-btn">Edit Details</label>
            </div>
            {/* The button to open modal */}



            {/* This modal is for updating profile information */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Info</h3>
                    <form onSubmit={updateUserInfo}>
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
                        <button className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Save</label>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;