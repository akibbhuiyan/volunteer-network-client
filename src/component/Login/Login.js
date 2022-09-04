import React, { useContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from '../../FirebaseConfig/Firebase.config';
import logo from '../../Group 1329.png'
import { FaGoogle } from "react-icons/fa";
import './Login.css'
import { UserContext } from '../../App';
import { useNavigate, Link } from "react-router-dom";

initializeApp(firebaseConfig)
const Login = () => {
    const auth = getAuth();
    const [user, setUser] = useState({
        isSignid: false,
        name: '',
        email: '',
        success: false,
        error: ''
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let navigate = useNavigate();

    const googleprovider = new GoogleAuthProvider()
    const handleGoogleSignIn = (e) => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const { displayName, email } = result.user;
                const googoleUserInfo = {
                    name: displayName,
                    email: email
                }
                googoleUserInfo.error = ''
                googoleUserInfo.success = true;
                setUser(googoleUserInfo)
                setLoggedInUser(googoleUserInfo)
                navigate(-2, { replace: true })
            }).catch((error) => {
                console.log(error);
            });
        e.preventDefault()
    }
    return (
        <div className='login-container'>
            <Link to='/'><img src={logo} alt="LOGO" className='logo' /></Link>
            <div className="login">
                <h3>Login with</h3>
                <button className="google-login" onClick={handleGoogleSignIn}>
                    <FaGoogle />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;