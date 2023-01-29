import React from 'react';
import './Service.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, image, title, description, price, quantity, supplierName } = service;

    const navigate = useNavigate();

    const updateBtn = id => {
        navigate(`/updateItem/${id}`);
    }

    return (
        <div className='service-card'>
            <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '20rem' }}>
                <Card.Img variant="top" width="250px" height="250px" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Current Price: {price}
                    </Card.Text>
                    <Card.Text>
                        Available Stock: {quantity}
                    </Card.Text>
                    <Card.Text>
                        Supplier Name: {supplierName}
                    </Card.Text>
                    <Button onClick={() => updateBtn(_id)} variant="primary">Update 📝</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;