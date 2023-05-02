import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Main = () => {
    return (
        <div>
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;