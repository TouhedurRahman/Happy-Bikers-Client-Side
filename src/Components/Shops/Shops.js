import React from 'react';
import "./Shops.css";
import { Button, Card } from 'react-bootstrap';

const Shops = () => {
    return (
        <div className='container shop-container text-center'>
            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="../../../images/shop-pic/shop-01.jpg" />
                <Card.Body>
                    <Card.Title>Head Office</Card.Title>
                    <Card.Text style={{ height: "170px", textAlign: "justify" }}>
                        Bangladesh Motorcycles Industry found new fuel in the higher limits for imported vehicles, now at 500cc with Royal Enfield entering the market. The market leader Bajaj Auto is progressively losing terrain.
                    </Card.Text>
                    <a href="tel:+8801839432144">
                        <Button variant="primary">Call</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="../../../images/shop-pic/shop-02.jpg" />
                <Card.Body>
                    <Card.Title>Bikes Showroom</Card.Title>
                    <Card.Text style={{ height: "170px", textAlign: "justify" }}>
                        Motorcycle is one of the most popular vehicles in Bangladesh and all over the world. On this page, you will get updated Bangladeshi Motorcycles price list with review and latest motorbike & scooter price updates.
                    </Card.Text>
                    <a href="tel:+8801839432144">
                        <Button variant="primary">Call</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="../../../images/shop-pic/shop-03.jpg" />
                <Card.Body>
                    <Card.Title>Service Center</Card.Title>
                    <Card.Text style={{ height: "170px", textAlign: "justify" }}>
                        A proper Service Schedule for different bikes is important. Find the most apt bike Service and Maintenance schedules for your two wheeler.
                    </Card.Text>
                    <a href="tel:+8801839432144">
                        <Button variant="primary">Call</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Shops;