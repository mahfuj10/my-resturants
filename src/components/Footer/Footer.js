import React from 'react';
import logo from '../../logo2.png';
import './Footer.css';

const Footer = () => {
    return (
     
            <footer className="row">
               
                <article className="col-lg-6">
                    <img width="250" src={logo} alt="logo" />
                </article>
               
                <article className="col-lg-6">
                    <article className="row">
                            <aside className="col-lg-6">
                                <p>About Online food</p>
                                <p>Read our blog</p>
                                <p>Sign up to deliver</p>
                                <p>Add your resturants</p>
                            </aside>
                            <aside className="col-lg-6">
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Restirants near me</p>
                            </aside>
                            <aside className="d-flex justify-content-center gap-5 mt-5">
                                <p >Private Policy</p>
                                <p >Terms of use</p>
                                <p >Cookies</p>
                            </aside>
                    </article>
                </article>
            </footer>
        );
};

export default Footer;