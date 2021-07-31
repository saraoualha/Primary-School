import React from 'react';
import "./Footer.css";  
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {FaPhone , FaFacebookF , FaMapPin, FaMapMarkerAlt, FaLinkedin, FaInstagram} from 'react-icons/fa';

const Footer =()=>{
    return(
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    <Router>
                        {/* column 1*/}
                        <div className="col">
                            <h4>Find Us</h4>
                            <ul className="list-unstyled">
                                <li><FaPhone /> 000-111-222</li>
                                <li><FaMapPin /> moscow russia</li>
                                <li><FaMapMarkerAlt /><Link to={{pathname:"https://goo.gl/maps/ZrQhQrFK2dgQ6kNX8"}} target="_blank">ENSI</Link></li>
                            </ul>
                        </div>    
               
                        {/* column 2*/}
                        <div className="col">
                            <h4>Social Media</h4>
                            <ul className="list-unstyled">
                                <li><FaFacebookF /> <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">FaceBook</Link></li>
                                <li><FaLinkedin/><Link to={{pathname:"https://www.linkedin.com/feed/"}} target="_blank"> LinkedIn </Link> </li>
                                <li><FaInstagram/> <Link to={{pathname:"https://www.instagram.com/?hl=fr"}} target="_blank"> Instagram </Link></li>
                            </ul>
                        </div>
                        {/* column 3*/}
                        <div className="col">
                            <h4>Learn More</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/home/calendar">Upcoming Events</Link></li>
                                <li>Latest News</li>
                                <li>Online Payment</li>
                            </ul>
                        </div>
                        < br/>
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear} THICC MEMES INC | All rights reserved | terms of service | privacy
                            </p>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Footer; 