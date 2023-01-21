import React from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import "./Home.css";

const Home = () => {
    const [services] = useServices();

    return (
        <div>
            <Banner></Banner>
            <div className='container item-container'>
                <h1 className='pt-3'>Your Dream Bikes</h1>
                <hr />
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <Button>Show More</Button>
            </div>
        </div>
    );
};

export default Home;