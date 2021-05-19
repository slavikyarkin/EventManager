import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.scss';
import { TextField } from '@material-ui/core';
import { LoginFormModel, LoginModel } from './LoginModel';

const initialState: LoginFormModel = {
    formData: {
        email: '',
        password: '',
    },
    errors: new Map,
    isLoading: false,
}

export const LoginContainer: React.FunctionComponent = () => {
    const [state, setState] = React.useState<LoginFormModel>(initialState);

    const handleSubmit = () => {
        setState({ ...state, isLoading: true });
    }

    const setModel = (model: LoginModel) => {
        const errors = validateModel(model);

        setState({
            ...state,
            formData: model,
            errors: errors
        });
    }

    const validateEmail = (email: string): boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validateModel = (model: LoginModel): Map<string, string> => {
        let errors: Map<string, string> = new Map;
        if (model.email == '') {
            errors.set('Email', 'Email is required');
        } else if (!validateEmail(model.email)) {
            errors.set('Email', 'Email is invalid');
        }
        if (model.password == '') {
            errors.set('Password', 'Password is required')
        }

        return errors;
    }

    const { formData, isLoading } = state;
    return (
        <div
            onSubmit={handleSubmit}
        >
            <h2>Login</h2>
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="standard-error-helper-text"
                label="Email"
                helperText={state.errors.get('Email')}
            />
            <br />
            <TextField required
                error={state.errors.has('Password')}
                onChange={(e) => setModel({ ...state.formData, password: e.currentTarget.value })}
                id="standard-password-input"
                label="Password"
                type="password"
                helperText={state.errors.get('Password')}
            />
            <br />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isLoading}
            >
                LOGIN
            </Button>
        </div>
    );
}
