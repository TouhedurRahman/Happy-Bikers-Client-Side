import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Registration.css';
import SocialLogin from './SocialLogin';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);

    const [passwordShown, setPasswordShown] = useState(false);

    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const saveUser = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
            })
    }

    const handleRegistration = data => {
        if (data.userPassword === data.userConfirmPassword) {
            createUser(data.userEmail, data.userPassword)
                .then(result => {
                    const user = result.user;
                    toast.success('User created Successfull');
                    const userInfo = {
                        displayName: data.userName
                    }
                    updateUser(userInfo)
                        .then(() => {
                            saveUser(data.userName, data.userEmail);
                        })
                        .then(error => { })
                }).catch(error => {
                    toast.error("This email is already registered!");
                });
        } else {
            toast.error("Password & Confirm Password must be same");
        }
    }

    return (
        <div className='registration-container mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <h1 className='text-center text-primary'>Registration</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Full Name</label>
                    <input type="text"
                        className="form-control py-3 rounded"
                        placeholder="Your Name"
                        {...register('userName', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control py-3 rounded"
                        placeholder="user@gmail.com"
                        {...register('userEmail', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control py-3 rounded"
                        placeholder="●●●●●●●●"
                        {...register('userPassword', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Confirm Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control py-3 rounded"
                        placeholder="●●●●●●●●"
                        {...register('userConfirmPassword', { required: true })}
                    />
                </div>
                <div className="mb-3 form-check py-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onClick={togglePassword}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>

                <button className='btn btn-light btn-outline-success w-75 d-block mx-auto my-2 py-3 rounded-pill'>
                    <span style={{ fontSize: "16px", fontWeight: "900" }} className='px-2'>Register</span>
                </button>
            </form>

            <p className='text-center mt-4'>
                Already have an account? <Link to="/login" className='text-primary text-decoration-none pe-auto'>Please Login</Link>
            </p>

            <SocialLogin />
        </div>
    );
};

export default Registration;