import React from 'react';
import { faStickyNote, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ManageStock.css';

const ManageStock = () => {
    const [manages, setManages] = useServices();
    const navigate = useNavigate();

    const deleteBtn = id => {
        const confirmDelation = window.confirm('Are you sure to delete?');
        if (confirmDelation) {
            const url = '../services.json';
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const remaining = manages.filter(product => product._id !== id);
                    setManages(remaining);
                });
        } else {
            return;
        }
    }

    const updateBtn = id => {
        navigate(`/updateItem/${id}`);
    }

    return (
        <div>
            <div className='m-3'>
                <h1 className='pt-3 text-center'>Manage Stock</h1>
                <hr />
                <Table striped hover>
                    <thead>
                        <tr style={{ backgroundColor: "#0000ffa1", color: "white" }}>
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
                                    <td className="hide-column" style={{ paddingTop: "1.25rem" }}>{manage._id}</td>
                                    <td style={{ paddingTop: "1.25rem" }}>{manage.title}</td>
                                    <td className="hide-column">
                                        <img style={{ height: "3rem", width: "3rem" }} className='rounded' src={manage.image} alt="" />
                                    </td>
                                    <td className="hide-column" style={{ paddingTop: "1.25rem" }}>৳ {manage.price}/-</td>
                                    <td className="hide-column" style={{ paddingTop: "1.25rem" }}>{manage.supplierName}</td>
                                    <td style={{ paddingTop: "1.25rem" }}>{manage.quantity}</td>
                                    <td>
                                        <FontAwesomeIcon onClick={() => deleteBtn(manage._id)} style={{ color: "#ff0000b8", height: "2rem", width: "2rem", paddingTop: "0.5rem", cursor: "pointer" }} icon={faTrash} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon onClick={() => updateBtn(manage._id)} style={{ color: "#1a8000ad", height: "2rem", width: "2rem", paddingTop: "0.5rem", cursor: "pointer" }} icon={faStickyNote} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <hr style={{ width: '20%' }} className='mx-auto'></hr>
                <div className='text-center m-3'>
                    <Link to='/add-new-bikes'>
                        <Button variant="primary" type="submit">
                            Add New Bikes
                        </Button>
                    </Link>
                </div>
                <hr style={{ width: '20%' }} className='mx-auto'></hr>
            </div>
        </div>
    );
};

export default ManageStock;