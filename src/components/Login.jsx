import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const provider = new GoogleAuthProvider();

const Login = () => {
    const [users, setUsers] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUsers(result.user);
            })
            .catch(error => {
                console.log(error);

            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signOut Done');
                setUsers(null)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1>Please login</h1>
            {users ? <button onClick={handleGoogleSignOut}>Sign Out From Google</button> : <button onClick={handleGoogleSignIn}>Log in With Google</button>}
            {users && <div>
                <h3>Name : {users.displayName}</h3>
                <h3>Email : {users.email}</h3>
            </div>}
        </div>
    );
};

export default Login;