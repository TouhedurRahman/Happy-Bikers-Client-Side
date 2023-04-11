import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { AiOutlineReload } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
    const { user, loading, emailVerification } = useContext(AuthContext);

    let location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className='text-center'>
                <div className='m-3 mx-auto'>
                    <img style={
                        {
                            borderRadius: '10%',
                            width: '300px',
                            height: '150px',
                            marginTop: '20px'
                        }
                    }
                        src="../../../images/email/email-notification.jpeg" alt="email-notification" />
                </div>
                <div>
                    <h1 className='text-success'>Please, Verify your Account</h1>
                    <div className="mx-auto m-3" style={{ maxWidth: '280px', }}>
                        <p>
                            Thanks for signingup with us.
                            <br />
                            Your account is <span className='text-danger'>not verified</span> yet.
                            <br />
                            Please Cheak your email
                            <br />
                            <span className='text-danger'>
                                ({user.email})
                            </span>
                            <br />
                            and verify your account.
                            If you don't get any verification email, click the button bellow to get verification email again or click reload button.
                        </p>
                    </div>
                    <button
                        onClick={
                            async () => {
                                await emailVerification();
                                toast.success('Email sent!');
                            }
                        }
                        className="btn-pr"
                    >
                        <BiMailSend className='font-bold me-2' />Re-send Verification Email
                    </button>

                    <button
                        onClick={
                            () => window.location.reload()
                        }
                        className='btn-pr ms-3'
                    >
                        <AiOutlineReload className='font-bold me-2' />Reload
                    </button>

                    <div className="mx-auto mt-3 mb-5" style={{ maxWidth: '280px', }}>
                        <p>
                            If this email wasn't intended for you feel free to delete it, Thak you.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return children;

};

export default PrivateRoute;