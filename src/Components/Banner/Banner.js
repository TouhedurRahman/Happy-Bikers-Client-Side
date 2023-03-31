import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaSellcast, FaBuysellads } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=" mt-5 mb-5">
            <Container>
                <Row className="flex-column-reverse flex-lg-row">
                    <Col lg={6} className="d-flex flex-column justify-content-center">
                        <div className='mt-5 mb-3'>
                            <h1 className="text-5xl font-weight-bold mb-4">Bikers World!</h1>
                            <p className="mb-5" style={{ textAlign: "justify" }}>
                                Welcome to our bike shop, where biking is more than just a hobby, it's a way of life. We are your go-to destination for all things biking, with a wide selection of bikes, gear, and accessories to choose from. Our team of experts are passionate about biking and are committed to helping you find the perfect bike and accessories to suit your needs. Shop with us today and experience the joy of biking!
                            </p>
                            <div className='text-primary' style={{ fontSize: "16px" }}>
                                <strong>
                                    <i>
                                        <BsFillCheckCircleFill /> Biking
                                        < FaSellcast className='ms-5' /> Selling
                                        <FaBuysellads className='ms-5' /> Buying
                                    </i>
                                </strong>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="../../../images/carousel-pic/carousel-02.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="../../../images/carousel-pic/carousel-03.jpg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="../../../images/carousel-pic/carousel-01.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;