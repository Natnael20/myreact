import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    return(

        <div className="container-fluid footer">
            <div className="container top-footer">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="reach">
                            <span className='contact-icon'><FontAwesomeIcon icon={faPhone} /></span>
                            <a href="tel:+18001234567" className='contact-number'>
                            1-800-123-4567
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="reach">
                            <span className='message-icon'><FontAwesomeIcon icon={faEnvelope} /></span>
                            <a href="mailto:mail@domain.com"className='email-address'>Mail@domain.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="reach">
                            <span className='mark-icon'><FontAwesomeIcon icon={faLocationDot} /></span>
                            <a href="#" className='location'>Location</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bottom-footer text-center">
                <div className="row">
                    <div className="col-lg-4">
                        <div className='footer-links quick-links'>
                            <h3>Quick Links</h3>
                            <a href="#home" className="quick-link">Home</a>
                            <a href="#about" className="quick-link">About</a>
                            <a href="#furniture" className="quick-link">Furniture</a>
                            <a href="#blog" className="quick-link">Blog</a>
                            <a href="#contact" className="quick-link">Contact</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='footer-links support'>
                            <h3>Support</h3>
                            <a href="#" className="quick-link">Terms of Service</a>
                            <a href="#" className="quick-link">Privacy Policy</a>
                            <a href="#" className="quick-link">Cookie Policy</a>
                            <a href="#" className="quick-link">Copyright Notice</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="subscribe">
                            <h3>NewsLetter</h3>
                            <input type="email" id='Email' placeholder='Email' />
                            <button className='btn about-btn mt-3'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='text-light float-end mt-3'>Copyright &copy; 2021 - All Right Reserved</p>
            </div>
        </div>
    );

}


export default Footer;