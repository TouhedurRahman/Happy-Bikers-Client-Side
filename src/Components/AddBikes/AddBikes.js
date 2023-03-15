import React from 'react';
import { useForm } from 'react-hook-form';

const AddBikes = () => {
    const { register, handleSubmit } = useForm();
    const addNewBikes = data => {
        console.log(data);
    }

    return (
        <div
            className='w-75 mx-auto mt-5 mb-5 p-5 border border-primary rounded-5'
            style={{
                background: `url('https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: 'cover'
            }}
        >
            <h1 className='pt-3 text-center font-bold text-white'>Add New Bikes</h1>
            <hr className='mb-5 text-white' />
            <form
                onSubmit={handleSubmit(addNewBikes)}
            >
                <div className="form-group mt-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bike Name"
                        {...register('bikeName', { required: true })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Bike description"
                        {...register('description', { required: true })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Current Price"
                        {...register('currentPrice', { required: true, min: 20 })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Available Stock"
                        {...register('inStock', { required: true, min: 1 })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Supplier Name"
                        {...register('supplierName', { required: true })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                        {...register('imgUrl', { required: true })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        {...register('userEmail', { required: true })}
                    />
                </div>
                <div className='text-center mt-3 mb-3'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddBikes;