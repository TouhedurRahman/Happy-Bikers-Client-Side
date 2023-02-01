import React, { useEffect, useState } from 'react';
import './UpdateItem.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { updateId } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState([]);

    useEffect(() => {
        const url = '../services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filteredProduct = data.filter(product => product._id === parseInt(updateId));
                if (filteredProduct.length) {
                    setProduct(filteredProduct[0]);
                }
            });
    }, [updateId]);

    useEffect(() => {
        const url = '../services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filteredProduct = data.filter(product => product._id === parseInt(updateId));
                if (filteredProduct.length) {
                    const updatedCount = filteredProduct[0].quantity;
                    setCount(updatedCount);
                }
            });
    }, [updateId]);

    const handleBulkDelivery = event => {
        event.preventDefault();

        const deliveryQuantity = parseInt(event.target.delevered.value);

        if (deliveryQuantity < 0 || count < deliveryQuantity) {
            alert("You might have mistaken!")
        } else {
            const updatedQuantity = count - deliveryQuantity;
            setCount(updatedQuantity);
        }
    };

    return (
        <div>
            <div className='service-card'>
                <div className='product-details'>
                    <Card className='border border-1 mx-auto m-1 card rounded-3' style={{ width: '20rem' }}>
                        <Card.Img variant="top" width="250px" height="250px" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                Current Price: {product.price}
                            </Card.Text>
                            <Card.Text>
                                Available Stock: {count}
                            </Card.Text>
                            <Card.Text>
                                Supplier Name: {product.supplierName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='product-delivery m-3'>
                    <h1 className='pt-3 text-center'>Bikes Delivery</h1>
                    <hr />

                    {/* Bulk Delivery */}
                    <Form onSubmit={handleBulkDelivery}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bikes Delivery</Form.Label>
                            <Form.Control className='text-center'
                                name="delevered"
                                type="number"
                                placeholder="Quantity"
                                required
                            />
                            <Form.Text className="text-muted">
                                ** You have {count} bikes available
                            </Form.Text>
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="primary" type="submit">
                                Bulk Delivery
                            </Button>
                        </div>
                    </Form>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-2'>Or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    </div>
                    <Form>
                        <div className='text-center'>
                            <Button variant="primary" type="submit">
                                Single Delivery
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='product-restock m-3'>
                    <h1 className='pt-3 text-center'>Bikes Restock</h1>
                    <hr />
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Bikes Restock</Form.Label>
                            <Form.Control className='text-center'
                                name="delevered"
                                type="number"
                                placeholder="Quantity"
                                required
                            />
                            <Form.Text className="text-muted">
                                ** You have {count} bikes available
                            </Form.Text>
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="primary" type="submit">
                                Restock
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <hr style={{ width: '20%' }} className='mx-auto'></hr>
            <div className='text-center m-3'>
                <Button variant="primary" type="submit">
                    Manage Stock
                </Button>
            </div>
            <hr style={{ width: '20%' }} className='mx-auto'></hr>
        </div>
    );
};

export default UpdateItem;