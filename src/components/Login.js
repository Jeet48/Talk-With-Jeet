import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import "firebase/app";
import {auth} from "../components/firebase";
import firebase from 'firebase/app';


const Login = () => {
    return(
        <div id="login-page">
            <div id = "login-card">
                <Typography align="center" variant="h4" component="div" gutterBottom>Talk-With-Jeet <ForumSharpIcon/></Typography>

                
                
                <div>
                        <Typography align="center">UserName<SupervisedUserCircleTwoToneIcon/></Typography>
                        <TextField id="filled-basic" label="UserName" variant="filled" size="normal" sx={{ width: '75%' }}/>
                
                </div>

                <br />            
               
                <div>
                        <Typography align="center">Password<PasswordTwoToneIcon/></Typography>
                        <TextField id="filled-basic" label="Password" variant="filled"  sx={{ width: '75%' }}/>
                </div>
                <br/>

                <div>

                </div>
                
                <br/>

                <div
                    className="login-button log"
                >
                    <LoginTwoToneIcon /> Login
                </div>

                <br /> <br/>
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