import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import sliderImg from '../Images/slider-img.png'; // Import the image
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className='container' id='home'>
                <nav class="navbar navbar-expand-sm">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><h4>EDGECUT</h4></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#furniture">Furniture</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export default Header;
