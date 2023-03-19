import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';

const auth = getAuth(app);

const SocialLogin = () => {
    const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                toast.success("Login Successful!");
            })
            .catch(err => console.log(err));
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