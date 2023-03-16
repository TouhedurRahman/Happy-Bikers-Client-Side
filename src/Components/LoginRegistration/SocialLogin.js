import React from 'react';

const SocialLogin = () => {
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
                    >
                        Continue With GOOGLE
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;