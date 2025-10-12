import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.init';



const GithubProvider = new GithubAuthProvider();
const GitHub = () => {
    const [gitHubUser, setGitHubUser] = useState(null);
    const handleGitHubLogIN = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1>Github Login</h1>
            <button onClick={handleGitHubLogIN}>GitHUb Login</button>
            <div>
                <h1>User Data</h1>

            </div>
        </div>
    );
};

export default GitHub;