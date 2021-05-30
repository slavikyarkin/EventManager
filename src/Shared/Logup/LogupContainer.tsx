import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { ApplicationState } from '../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./LogupActions";
import { connect } from 'react-redux';
import { LogupFormModel, LogupModel } from './LogupModel';
import './Logup.scss';

const initialState: LogupFormModel = {
    formData: {
        email: '',
        password: '',
    },
    errors: new Map,
    isLoading: false,
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    submit: (model: LogupModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const LoginContainer = (props: Props) => {
    const [state, setState] = React.useState<LogupFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ ...state, isLoading: true });
        props.submit(state.formData);
        
        // setToken(token);
    }

    const setModel = (model: LogupModel) => {
        const errors = validateModel(model);

        setState({
            ...state,
            formData: model,
            errors: errors,
        });
    }

    const validateEmail = (email: string): boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validateModel = (model: LogupModel): Map<string, string> => {
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
        <form className={"logup-wrapper"} onSubmit={e => handleSubmit(e)}>
            <h2>Logup</h2>
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="standard-error-helper-text"
                label="First Name"
                helperText={state.errors.get('Email')}
            />
            <br />
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="standard-error-helper-text"
                label="Last Name"
                helperText={state.errors.get('Email')}
            />
            <br />
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="standard-error-helper-text"
                label="Email address"
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
        </form>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        routerModel: state.routerState.router,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        submit: actions.logUp
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

