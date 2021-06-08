import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css'

function Login() {
const dispatch = useDispatch();

    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            console.log(user);
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                src="https://i.pinimg.com/564x/5f/24/29/5f24295e0f9ad080bf159ff0b8fb6d88.jpg"
                alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login
                </Button>
            </div>
            
        </div>
    )
}

export default Login
