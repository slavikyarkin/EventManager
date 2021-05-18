import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './Login.scss';

export default function Logup() {
    return (
        <div className="login-wrapper">
            <form>
                <div>
                    <Button variant="contained">Submit</Button>
                </div>
            </form>
        </div>
    )
}