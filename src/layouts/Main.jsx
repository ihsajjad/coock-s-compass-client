import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Main = () => {
    return (
        <div>
            <Navbar />
            <ReactNotifications />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;