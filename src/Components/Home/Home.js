import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import Openion from '../Openion/Openion';
import Service from '../Service/Service';
import Shops from '../Shops/Shops';
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
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <Link to='/manage-stock'>
                    <Button>Manage Stock</Button>
                </Link>
            </div>

            <div className='container item-container'>
                <h1 className='pt-3'>Our Shops</h1>
                <hr />
                <div className='shops-container'>
                    <Shops></Shops>
                </div>
            </div>

            <div className='container item-container'>
                <h1 className='pt-3'>Your Openion</h1>
                <hr />
                <div className='openion-conainer'>
                    <Openion></Openion>
                </div>
            </div>
        </div>
    );
};

export default Home;