import React from 'react';
import './PageNotFound.css';
import CustomLink from '../CustomLink/CustomLink';

const PageNotFound = () => {
    return (
        <div>
            <div className='not-found'>
                <img src="https://solutiondots.com/wp-content/uploads/2015/06/defaultTemplate.png" alt="" />
                <br />
                <CustomLink to='home'>
                    <button className='home-btn'>Go to Home</button>
                </CustomLink>
            </div>
        </div>
    );
};

export default PageNotFound;