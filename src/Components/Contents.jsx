import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import f1 from '../Images/f1.png'
import f2 from '../Images/f2.png'
import f3 from '../Images/f3.png'
import f4 from '../Images/f4.png'
import f5 from '../Images/f5.png'
import f6 from '../Images/f6.png'
import about from '../Images/about-img.png'
import b1 from '../Images/b1.jpg'
import b2 from '../Images/b2.jpg'
import b3 from '../Images/b3.jpg'


function Contents() {

        return (

            <div className='contents' id="furniture"> 
                <div className="container second-content">
                    <div className="second-title">
                        <h1>OUR FURNITURE</h1>
                        <p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an</p>
                    </div>
                    <div className="row products">
                        <div className="col-lg-4">
                            <div className="product">
                                <img src={f1} alt="" className="img-fluid" />
                                <h6>BROWN CHAIR DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product">
                                <img src={f2} alt="" className="img-fluid" />
                                <h6>DOUBLE BED DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product shrink">
                                <img src={f3} alt="" className="img-fluid" />
                                <h6>HOUSE CHAIR DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product">
                                <img src={f4} alt="" className="img-fluid" />
                                <h6>BROWN TABLE DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product">
                                <img src={f5} alt="" className="img-fluid" />
                                <h6>BLUE CHAIR DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product shrink">
                                <img src={f6} alt="" className="img-fluid" />
                                <h6>BROWN TABLE DESIGN</h6>
                                <div className="price">
                                    <div>
                                        <p><span>$</span>100.00</p>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container about" id='about'>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <img src={about} className='img-fluid' alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className='about-us'>
                                <h1>About Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus numquam hic ipsum incidunt iusto obcaecati aperiam ullam ducimus, dolores odit, temporibus neque velit eaque error, sunt delectus laborum ad!</p>
                                <button className='btn'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container blogs" id='blog'>
                    <div className="blog-title">
                        <h2 className='text-center'>Latest Blog</h2>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-lg-3">
                            <div className="blog">
                                <img src={b1} alt="" className="img-fluid" />
                                <h4>Look even slightly believable. If you are</h4>
                                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <button className="btn about-btn">Read More</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog">
                                <img src={b2} alt="" className="img-fluid" />
                                <h4>Anything embarrassing hidden in the middle</h4>
                                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <button className="btn about-btn">Read More</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog">
                                <img src={b3} alt="" className="img-fluid" />
                                <h4>Molestias magni natus dolores odio commodi.</h4>
                                <p>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <button className="btn about-btn">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container contact" id='contact'>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className='fw-bold mb-3'>CONTACT US</h2>
                            <div className='user-input'>
                                <input type="text" id='firstName' placeholder='First Name' />
                                <input type="text" id='LastName' placeholder='Last Name' />
                                <input type="email" id='Email' placeholder='Email' />
                                <textarea name="Message" id="message" rows="7" placeholder='Message'></textarea>
                            </div>
                            <button className='btn about-btn w-25 p-3 mt-5'>Send</button>
                        </div>
                        <div className="col-lg-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8145.501100678156!2d18.18680616931172!3d59.30999029557235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f82766ee19327%3A0x27e23bc54115c51d!2s131%2042%20Ek%C3%A4ngen!5e0!3m2!1sen!2sse!4v1707701223590!5m2!1sen!2sse" height="450" className='frame' allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Contents;