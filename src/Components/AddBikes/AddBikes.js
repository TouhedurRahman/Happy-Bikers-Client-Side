import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddBikes = () => {
    useTitle('Add Bikes');

    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const addNewBikes = (data, event) => {
        const form = event.target;
        form.reset();

        const url = `https://happy-bikers-server-site.vercel.app/bikes`;

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
                    toast.success('Bike added successful!');
                } else {
                    toast.error('Somethig went wrong. Please try again.');
                }
            })
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
                        {...register('title', { required: true })}
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
                        {...register('price', { required: true, min: 20 })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Available Stock"
                        {...register('quantity', { required: true, min: 1 })}
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
                        {...register('image', { required: true })}
                    />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input
                        type="email"
                        className="form-control"
                        value={user?.email}
                        readOnly
                        {...register('email', { required: true })}
                    />
                </div>
                <div className='text-center mt-3 mb-3'>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddBikes;