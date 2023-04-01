import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, resetPassword } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [enterUserEmail, setEnterUserEmail] = useState('');
    const [emailToken, setEmailToken] = useState('');
    const [token] = useToken(emailToken);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])


    const handleLogin = data => {
        setIsLoading(false);
        setLoginError('');
        login(data.userEmail, data.userPassword)
            .then(result => {
                const user = result.user;
                setEmailToken(user.email);
            })
            .catch(error => {
                toast.error("Email or Password is not valid!");
                setLoginError(error);
            });
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setEnterUserEmail(email);
    }

    const handleResetPassword = () => {
        if (enterUserEmail) {
            resetPassword(enterUserEmail)
                .then(() => {
                    toast.success("Email Sent!");
                })
                .then(err => { })
        }
        else {
            toast.error("Please Enter a valid Email");
        }
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
                        {...register('userEmail', { required: "Email Address is required" })}
                        onBlur={handleEmailBlur}
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
                Forget password?<button onClick={handleResetPassword} className='btn btn-link text-primary text-decoration-none pe-auto'>Reset Password</button>
            </p>
            <p className='text-center'>
                New to Happy Bikers? <Link to="/register" className='text-primary text-decoration-none pe-auto'>Please Register</Link>
            </p>

            <SocialLogin />
        </div>
    );
};

export default Login;