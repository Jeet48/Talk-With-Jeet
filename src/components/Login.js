import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import "firebase/app";
import {auth} from "../components/firebase";
import firebase from 'firebase/app';


const Login = () => {
    return(
        <div id="login-page">
            <div id = "login-card">
                <Typography align="center" variant="h4" component="div" gutterBottom>Talk-With-Jeet <ForumSharpIcon/></Typography>
            <div className="login-button">
                <div
                    className="login-button github"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                >
                    <GitHubIcon /> Sign In with Github
                </div>
                    <br /><br />
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleIcon /> Sign In with Google
                </div>

            </div>
            </div>
        </div>
    );
}

export default Login;