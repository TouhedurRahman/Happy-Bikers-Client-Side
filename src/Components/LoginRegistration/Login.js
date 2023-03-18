import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);

    const [passwordShown, setPasswordShown] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = data => {
        console.log(data);
        login(data.userEmail, data.userPassword)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='login-container mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <h1 className='text-center text-primary'>Login</h1>
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
                <div className="mb-3 form-check py-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onClick={togglePassword}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>

                <button className='btn btn-light btn-outline-success w-75 d-block mx-auto my-2 py-3 rounded-pill'>
                    <span style={{ fontSize: "16px", fontWeight: "900" }} className='px-2'>Login</span>
                </button>
            </form>

            <p className='text-center mt-4'>
                Forget password?<button className='btn btn-link text-primary text-decoration-none pe-auto'>Reset Password</button>
            </p>
            <p className='text-center'>
                New to Happy Bikers? <Link to="/register" className='text-primary text-decoration-none pe-auto'>Please Register</Link>
            </p>

            <SocialLogin />
        </div>
    );
};

export default Login;