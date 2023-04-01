import React, { useEffect, useState } from 'react';
import './UpdateItem.css';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const UpdateItem = () => {
    useTitle('Update Bikes');

    const { updateId } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState([]);

    useEffect(() => {
        const url = `https://happy-bikers-server-site.vercel.app/updateItem/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [updateId]);

    useEffect(() => {
        const url = `https://happy-bikers-server-site.vercel.app/updateItem/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCount(data.quantity));
    }, [updateId]);

    const handleBulkDelivery = event => {
        event.preventDefault();

        const deliveryQuantity = parseInt(event.target.delevered.value);

        if (deliveryQuantity <= 0 || count <= deliveryQuantity) {
            toast.error("You might have mistaken!");
            return;
        } else {
            const updatedQuantity = count - deliveryQuantity;
            setCount(updatedQuantity);

            const updatedBikeInfo = { updatedQuantity };

            const url = `https://happy-bikers-server-site.vercel.app/updateItem/${updateId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedBikeInfo),
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`Successfully Delivered ${deliveryQuantity} bikes`);
                    event.target.reset();
                })
        }
    };

    const handleSingleDelivery = event => {
        event.preventDefault();

        if (count <= 0) {
            toast.error("You do not have any bike to deliver!");
            return;
        } else {
            const updatedQuantity = count - 1;
            setCount(updatedQuantity);

            const updatedBikeInfo = { updatedQuantity };

            const url = `https://happy-bikers-server-site.vercel.app/updateItem/${updateId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedBikeInfo),
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Successfully Delivered!');
                    event.target.reset();
                })
        }
    };

    const hadleRestock = event => {
        event.preventDefault();

        const restockQuantity = parseInt(event.target.restock.value);

        if (restockQuantity <= 0) {
            toast.error("You might have mistaken!");
            return;
        } else {
            const updatedQuantity = parseInt(count) + restockQuantity;
            setCount(updatedQuantity);

            const updatedBikeInfo = { updatedQuantity };

            const url = `https://happy-bikers-server-site.vercel.app/updateItem/${updateId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedBikeInfo),
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`Successfully Restock ${restockQuantity} ${(restockQuantity > 1) ? 'bikes' : 'bike'}!`);
                    event.target.reset();
                })
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

                    {/* Single Delivery */}
                    <Form onSubmit={handleSingleDelivery}>
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

                    {/* Bikes Restock */}
                    <Form onSubmit={hadleRestock}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bikes Restock</Form.Label>
                            <Form.Control className='text-center'
                                name="restock"
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
                <Link to='/manage-stock'>
                    <Button variant="primary" type="submit">
                        Manage Stock
                    </Button>
                </Link>
            </div>
            <hr style={{ width: '20%' }} className='mx-auto'></hr>
        </div>
    );
};

export default UpdateItem;