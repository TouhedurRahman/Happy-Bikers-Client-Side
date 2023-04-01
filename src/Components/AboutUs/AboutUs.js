import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import "./AboutUs.css";
import useTitle from '../../hooks/useTitle';

const AboutUs = () => {
    useTitle('About Us');

    return (
        <Container>
            <div className='about-us m-3'>
                <div className='half-width about-us-img'>
                    <Image style={{ height: "250px", width: "250px" }} src="../../../images/site-logo/bike-shop-logo.png" />
                </div>
                <div className='half-width about-us-description'>
                    <h1>ABOUT US</h1>
                    <p className='about-us-text'>
                        Welcome to Bike Warehouse, your one-stop-shop for all your needs! We are a leading online retailer of bikes, accessories, and parts, offering a wide range of products at wholesale prices. <br /><br />

                        Our mission is to provide high-quality bikes and gear to our customers at the best possible prices. We believe that biking is not just a sport or a hobby, but a way of life, and we are committed to helping you get the most out of your biking experience.
                    </p>
                </div>
            </div>
            <div className='contact-us mb-5'>
                <Card className='text-center shadow'>
                    <div className='pt-3'>
                        <div className='mx-auto rounded-3'>
                            <Card.Img style={{ height: "100px", width: "100px" }} variant="top" src="../../../images/contact-pic/clock.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>Opening Hours</Card.Title>
                            <Card.Text>
                                Available 10 AM to 8PM Eeveryday <br />
                                Without Friday
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                <Card className='text-center shadow'>
                    <div className='pt-3'>
                        <div className='mx-auto rounded-3'>
                            <Card.Img style={{ height: "100px", width: "100px" }} variant="top" src="../../../images/contact-pic/location.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>Location</Card.Title>
                            <Card.Text>
                                Ashulia, Savar <br />
                                Dhaka, Bangladesh
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                <Card className='text-center shadow'>
                    <div className='pt-3'>
                        <div className='mx-auto rounded-3'>
                            <Card.Img style={{ height: "100px", width: "100px" }} variant="top" src="../../../images/contact-pic/contact.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>Contact</Card.Title>
                            <Card.Text>
                                +880 1839-432144 <br />
                                happy_bikers@warehouse.com
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </Container>
    );
};

export default AboutUs;