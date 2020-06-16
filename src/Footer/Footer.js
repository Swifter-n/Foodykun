import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="my-footer">
        <div className="container">
            <div className="row">
                <div className="col-4 text-center">
                    <h5>About Foodykun</h5>
                    <ul>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-4 text-center">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="/#">FAQ</a></li>
                        <li><a href="/#">Helpdesk</a></li>
                        <li><a href="/#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-4 text-center">
                    <h5>Download App</h5>
                    <ul>
                        <li><a href="/#">Google Store</a></li>
                        <li><a href="/#">App Store</a></li>
                    </ul>
                </div>
            </div>
            <div className="social-networks">
                <a href="/#" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="/#" className="facebook"><i className="fa fa-facebook-official"></i></a>
                <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
        <div className="text-center footer-copyright bg-primary">
            <p>Copyright &copy; 2020 Foodkun</p>
        </div>
    </footer>
);

export default Footer;