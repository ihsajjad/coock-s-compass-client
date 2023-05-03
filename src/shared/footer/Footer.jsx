import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer px-20 py-10 bg-base-200 text-base-content">
                <div>
                    <h1 className='text-3xl font-bold'>Cook's <br /> Compass</h1>
                    <p>From farm to table, <br />we bring the best to your kitchen.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Chefs Supply</a>
                    <a className="link link-hover">Traditional Korean Foods</a>
                    <a className="link link-hover">Birthday ceremony</a>
                    <a className="link link-hover">Wedding dishes</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;