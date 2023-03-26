import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-container'>
            <div className="footer-details">
                <div>
                    <h3>Happy Bikers</h3>
                    <hr></hr>
                    <h5><i><strong>Our Head Office</strong></i></h5>
                    <address>
                        <i>
                            Dattapara, Model Town <br />
                            Ashulia, Savar <br />
                            Dhaka, Bangladesh.
                        </i>
                    </address>
                    <hr></hr>
                    <h6><GiRotaryPhone style={{ fontSize: "25px" }} /> +880 1839-432144</h6>
                    <h6><MdEmail style={{ fontSize: "25px" }} /> happy_bikers@warehouse.com</h6>
                </div>
                <div>
                    <h6>SERVICES</h6>
                    <hr></hr>
                    <p>Branding</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>Advertisement</p>
                </div>
                <div>
                    <h6>COMPANY</h6>
                    <hr></hr>
                    <p>About Us</p>
                    <p>Contacts</p>
                    <p>Jobs</p>
                </div>
                <div>
                    <h6>LEGAL</h6>
                    <hr></hr>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
                <div className='get-touch'>
                    <h6>GET IN TOUCH</h6>
                    <hr></hr>
                    <div className='get-touch-icons' style={{ fontSize: "30px" }}>
                        <MdEmail style={{ cursor: "pointer" }}></MdEmail>
                        <AiFillYoutube style={{ cursor: "pointer" }}></AiFillYoutube>
                        <AiFillInstagram style={{ cursor: "pointer" }}></AiFillInstagram>
                        <FaFacebookSquare style={{ cursor: "pointer" }}></FaFacebookSquare>
                        <FaTwitterSquare style={{ cursor: "pointer" }}></FaTwitterSquare>
                        <FaWhatsappSquare style={{ cursor: "pointer" }}></FaWhatsappSquare>
                    </div>
                </div>
            </div>
            <hr className='w-50 mx-auto' />
            <div className='text-center'>
                <p><small>Copyright © {year} All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;