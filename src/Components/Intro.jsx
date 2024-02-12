import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import sliderImg from '../Images/slider-img.png'; // Import the image
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Intro() {

    return(
        <div className="container-fluid bottom-nav mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>FOR ALL YOUR FURNITURE NEEDS</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.</p>
                        <button className="btn contact-btn">Contact Us</button>
                        <button className="btn about-btn">About Us</button>
                    </div>
                    <div className="col-lg-6">
                        {/* Use the imported image */}
                        <img src={sliderImg} alt="Slider" className='img-fluid' />
                    </div>
                </div>
            </div>
    );

}

export default Intro;