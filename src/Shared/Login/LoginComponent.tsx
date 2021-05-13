import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './Login.scss';

export default function Login() {
    return (
        <div className="login-wrapper">
            <form>
                <div>
                    <TextField id="standard-basic" label="Username" />
                </div>
                <div>
                    <TextField id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password" />
                </div>
                <div>
                    <Button variant="contained">Submit</Button>
                </div>
            </form>
        </div>
    )
}