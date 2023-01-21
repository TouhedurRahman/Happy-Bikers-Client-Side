import React from 'react';
import { Button, Form } from 'react-bootstrap';

import './Openion.css';

const Openion = () => {


    return (
        <div className='openion-section'>
            <div className='openion-img half-width'>
                <img width="50%" src='https://img.onmanorama.com/content/dam/mm/en/news/business/images/2020/12/31/honda-cb-hornet.jpg' alt='' />
            </div>
            <div className='openon-form half-width'>
                <form>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='label'>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='text-start'>Your Openion</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your valuable comments..." />
                        </Form.Group>
                        <Button>Submit</Button>
                    </Form>
                </form>
            </div>
        </div>
    );
};

export default Openion;