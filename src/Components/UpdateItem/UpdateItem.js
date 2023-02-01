import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { updateId } = useParams();
    const [product, setProduct] = useState({});

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

    return (
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
                            Available Stock: {product.quantity}
                        </Card.Text>
                        <Card.Text>
                            Supplier Name: {product.supplierName}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UpdateItem;