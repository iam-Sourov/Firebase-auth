import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.init';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("clicked");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email);
        console.log(password);
        // Reset Error
        setError('');
        setSuccess(false);''
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("result :", result.user);
                setSuccess(true);
                e.target.reset();
            })
            .catch(error => {
                console.log("Error Happend", error.message);
                setError(error.message);
            })
    }
    return (
        <form className='container mx-auto' onSubmit={handleRegister}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Register Now</legend>
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            {
                success && <p className='text-green-500'>Account Created</p>
            }
            {
                error && <p className='text-red-500'>{error}</p>
            }
        </form>
    );
};

export default Register;