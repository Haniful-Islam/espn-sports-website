import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p className="text-danger">Error: {error.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="w-50 bg-info"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: '1px' }} className="w-50 bg-info"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info d-block mx-auto p-2 w-75 text-white my-2">
                    <img style={{ width: "25px", marginRight: "10px" }} src={google} alt="" />
                    Google Sign In
                </button>
                <button
                    // onClick={() => signInWithGithub()}
                    className="btn btn-info d-block mx-auto p-2 w-75 text-white">
                    <img style={{ width: "25px", marginRight: "8px" }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;