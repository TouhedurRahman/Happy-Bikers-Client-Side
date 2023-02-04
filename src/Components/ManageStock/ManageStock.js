import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ManageStock.css';

const ManageStock = () => {
    const [manages, setManages] = useServices();
    const navigate = useNavigate();

    const updateBtn = id => {
        navigate(`/updateItem/${id}`);
    }

    return (
        <div>
            <div className='m-3'>
                <h1 className='pt-3 text-center'>Manage Stock</h1>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Supplier Name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manages.map(manage =>
                                <tr key={manage._id}>
                                    <td className="hide-column">{manage._id}</td>
                                    <td>{manage.title}</td>
                                    <td className="hide-column">
                                        <img style={{ height: "50px", width: "50px" }} className='rounded' src={manage.image} alt="" />
                                    </td>
                                    <td className="hide-column">৳ {manage.price}/-</td>
                                    <td className="hide-column">{manage.supplierName}</td>
                                    <td>{manage.quantity}</td>
                                    <td>
                                        <Button className="d-flex align-items-center mx-auto">Delete</Button>
                                    </td>
                                    <td>
                                        <Button onClick={() => updateBtn(manage._id)} className="d-flex align-items-center mx-auto">Update</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <hr style={{ width: '20%' }} className='mx-auto'></hr>
                <div className='text-center m-3'>
                    <Button variant="primary" type="submit">
                        Add New Bikes
                    </Button>
                </div>
                <hr style={{ width: '20%' }} className='mx-auto'></hr>
            </div>
        </div>
    );
};

export default ManageStock;