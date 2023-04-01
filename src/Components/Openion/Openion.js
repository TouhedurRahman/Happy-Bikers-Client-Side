import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

import './Openion.css';

const Openion = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleOpenion = (data, event) => {
        const form = event.target;
        form.reset();

        const url = `https://happy-bikers-server-site.vercel.app/openions`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    toast.success("Thank you! We'll reply you ASAP.");
                } else {
                    toast.error('Somethig went wrong! Please try again.');
                }
            })
    }

    return (
        <div className='openion-section'>
            <div className='openion-img half-width'>
                <img className='rounded-4' width="50%" src='../../../images/Openion-pic/openion-section-pic.jpg' alt='Bike Loading...' />
            </div>
            <div className='openion-form half-width'>
                <Form onSubmit={handleSubmit(handleOpenion)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='label'>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            defaultValue={user && user?.email}
                            placeholder="user@gmail.com"
                            {...register('email', { required: true })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label
                            className='text-start'>Your Openion</Form.Label>
                        <Form.Control
                            {...register('comment', { required: true })}
                            as="textarea"
                            rows={3}
                            placeholder="Your valuable comments..."
                        />
                    </Form.Group>
                    <div className='text-center'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Openion;