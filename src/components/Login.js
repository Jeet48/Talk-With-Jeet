import React from 'react';
import {GoogleOutlined, FacebookOutlined} from "@ant-design/icons";
import ForumSharpIcon from '@mui/icons-material/ForumSharp';


const Login = () => {
    return(
        <div id="login-page">
            <div id = "login-card">
                <h2>Talk-With-Jeet <ForumSharpIcon/></h2>

                <div
                    className="login-button google"
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br /> <br/>

                <div
                    className="login-button facebook"
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;