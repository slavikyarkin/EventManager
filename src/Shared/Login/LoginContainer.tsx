import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Login.scss';
import { TextField } from '@material-ui/core';
import { LoginFormModel, LoginModel } from './LoginModel';
import { ErrorSharp, Satellite } from '@material-ui/icons';

const initialState: LoginFormModel = {
    formData: {
        usaername: '',
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

    const validateModel = (model: LoginModel): Map<string, string> => {
        let errors: Map<string, string> = new Map;
        if (model.usaername != 'aaa') {
            errors.set('username', 'username');
        }
        return errors;
    }

    const { formData, isLoading } = state;
    return (
        <ValidatorForm
            onSubmit={handleSubmit}
        >
            <h2>Login</h2>
            <TextField
                error={state.errors.has('username')}
                onChange={(e) => setModel({ ...state.formData, usaername: e.currentTarget.value })}
                id="standard-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText={state.errors.get('username')}
            />
            {/* <TextValidator
                    label="Email"
                    onChange={(e, v) => setModel({ ...state.formData, usaername: v })}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                /> */}
            <br />
            <TextValidator
                label="Password"
                type="password"
                onChange={(e, v) => setModel({ ...state.formData, password: v })}
                name="password"
                value={formData.password}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isLoading}
            >
                Submit
            </Button>
        </ValidatorForm>
    );
}
