import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Registration.css';
import SocialLogin from './SocialLogin';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [registerError, setRegisterError] = useState('');
    const [emailToken, setEmailToken] = useState('');
    const [token] = useToken(emailToken);

    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate])

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
                setEmailToken(email);
            })
    }

    const handleRegistration = data => {
        if (data.userPassword === data.userConfirmPassword) {
            setIsLoading(false);
            setRegisterError('');
            createUser(data.userEmail, data.userPassword)
                .then(result => {
                    const user = result.user;
                    const userInfo = {
                        displayName: data.userName
                    }
                    updateUser(userInfo)
                        .then(() => {
                            saveUser(data.userName, data.userEmail);
                        })
                        .then(error => setRegisterError(error))
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
                        {...register('userName', { required: "Name is required" })}
                    />
                    {
                        errors.userName && <p style={{ color: "red" }}>** {errors.userName?.message} **</p>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control py-3 rounded"
                        placeholder="user@gmail.com"
                        {...register('userEmail', { required: "Email Address is required" })}
                    />
                    {
                        errors.userEmail && <p style={{ color: "red" }}>** {errors.userEmail?.message} **</p>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control py-3 rounded"
                        placeholder="●●●●●●●●"
                        {...register("userPassword", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be eight character or long." },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@@#\$%\^&\*])(?=.{8,})/,
                                message: "Password must be Strong [At least one capital letter, one small latter, one special character and a numeric value is required]"
                            }
                        })}
                    />
                    {
                        errors.userPassword && <p style={{ color: "red" }}>** {errors.userPassword?.message} **</p>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Confirm Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control py-3 rounded"
                        placeholder="●●●●●●●●"
                        {...register("userConfirmPassword", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be eight character or long." },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@@#\$%\^&\*])(?=.{8,})/,
                                message: "Password must be Strong [At least one capital letter, one small latter, one special character and a numeric value is required]"
                            }
                        })}
                    />
                    {
                        errors.userConfirmPassword && <p style={{ color: "red" }}>** {errors.userConfirmPassword?.message} **</p>
                    }
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