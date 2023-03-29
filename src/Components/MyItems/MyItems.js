import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyItems = () => {
    const { user } = useContext(AuthContext);
    const [manages, setManages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/my-items?email=${user?.email}`;
        fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setManages(data));
    }, [user?.email])

    const deleteBtn = id => {
        const confirmDelation = window.confirm('Are you sure to delete?');
        if (confirmDelation) {
            const url = `http://localhost:5000/deleteItem/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = manages.filter(product => product._id !== id);
                        setManages(remaining);
                        toast.success("Successfully deleted!");
                    }
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
                <h1 className='pt-3 text-center'>Bikes Added By me</h1>
                <hr />
                <Table responsive striped hover style={{ whiteSpace: "nowrap" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#0000ffa1", color: "white" }}>
                            <th className='text-center'>Sl. No.</th>
                            <th>Name</th>
                            <th className='text-center'>Image</th>
                            <th className='text-end'>Price (৳)/-</th>
                            <th className='text-center'>Quantity</th>
                            <th>Supplier Name</th>
                            <th className='text-center'>Delete</th>
                            <th className='text-center'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manages.map((manage, i) =>
                                <tr key={manage._id}>
                                    <td className="hide-column text-center" style={{ paddingTop: "1.25rem" }}>{i + 1}</td>
                                    <td style={{ paddingTop: "1.25rem" }}>{manage.title}</td>
                                    <td className="hide-column text-center">
                                        <img style={{ height: "3rem", width: "3rem" }} className='rounded' src={manage.image} alt="" />
                                    </td>
                                    <td className="hide-column text-end" style={{ paddingTop: "1.25rem" }}>৳ {manage.price}/-</td>
                                    <td className='text-center' style={{ paddingTop: "1.25rem" }}>{manage.quantity}</td>
                                    <td className="hide-column" style={{ paddingTop: "1.25rem" }}>{manage.supplierName}</td>
                                    <td className='text-center'>
                                        <FaTrashAlt onClick={() => deleteBtn(manage._id)} style={{ color: "#ff0000b8", height: "3rem", width: "1.5rem", cursor: "pointer" }} />
                                    </td>
                                    <td className='text-center'>
                                        <TfiWrite onClick={() => updateBtn(manage._id)} style={{ color: "#1a8000ad", height: "3rem", width: "1.5rem", cursor: "pointer" }} />
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

export default MyItems;