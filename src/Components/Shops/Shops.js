import React from 'react';
import "./Shops.css";
import { Button, Card } from 'react-bootstrap';

const Shops = () => {
    return (
        <div className='container shop-container'>
            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXyCdxxKbAMJdkB8xigNq5JJy68xLYL857A&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Head Office</Card.Title>
                    <Card.Text style={{ height: "170px" }}>
                        Bangladesh Motorcycles Industry found new fuel in the higher limits for imported vehicles, now at 500cc with Royal Enfield entering the market. The market leader Bajaj Auto is progressively losing terrain.
                    </Card.Text>
                    <a href="tel:+8801839432144">
                        <Button variant="primary">Call</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="https://cdn.shopify.com/s/files/1/0271/9493/files/workshop_1400x.jpg?v=1638463240" />
                <Card.Body>
                    <Card.Title>Bikes Showroom</Card.Title>
                    <Card.Text style={{ height: "170px" }}>
                        Motorcycle is one of the most popular vehicles in Bangladesh and all over the world. On this page, you will get updated Bangladeshi Motorcycles price list with review and latest motorbike & scooter price updates.
                    </Card.Text>
                    <a href="tel:+8801839432144">
                        <Button variant="primary">Call</Button>
                    </a>
                </Card.Body>
            </Card>

            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" height="250px" width="250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqznJlbFOHF3XibfLrBGrcdAFAEPzaLlOMnA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Service Center</Card.Title>
                    <Card.Text style={{ height: "170px" }}>
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