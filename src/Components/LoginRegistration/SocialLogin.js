import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import useToken from '../../hooks/useToken';

const auth = getAuth(app);

const SocialLogin = () => {
    const provider = new GoogleAuthProvider();
    const [registerError, setRegisterError] = useState('');
    const [emailToken, setEmailToken] = useState('');
    const [token] = useToken(emailToken);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

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
            .then(data => { })
    }
    if (token) {
        navigate(from, { replace: true });
        toast.success("Login Successful!");
    }

    const handleGoogleSignIn = () => {
        setRegisterError('');
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                saveUser(user.displayName, user.email);
                setEmailToken(user.email);
            })
            .catch(error => setRegisterError(error));
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <div>
                <button className='btn btn-light btn-outline-success w-75 d-block mx-auto my-2 py-3 rounded-pill'>
                    <img
                        style={{ width: '30px', borderRadius: '50%' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
                        alt=""
                    />
                    <span
                        style={{ fontSize: "16px", fontWeight: "900" }}
                        className='px-2'
                        onClick={handleGoogleSignIn}
                    >
                        Continue With GOOGLE
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;