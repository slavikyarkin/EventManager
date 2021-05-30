import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.scss';
import { Link, TextField } from '@material-ui/core';
import { LoginFormModel, LoginModel } from './LoginModel';
import PropTypes from 'prop-types';
import { ApplicationState } from '../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./LoginActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState: LoginFormModel = {
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
    submit: (model: LoginModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const LoginContainer = (props: Props) => {
    const [state, setState] = React.useState<LoginFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState({ ...state, isLoading: true });
        props.submit(state.formData);

        // setToken(token);
    }

    const setModel = (model: LoginModel) => {
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

    const history = useHistory();
    const { formData, isLoading } = state;
    return (
        <form className={"login-wrapper"} onSubmit={e => handleSubmit(e)}>
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
                Log In
            </Button>
            <Link href="#" >
                Forgotten password?
            </Link>
            <br />
            <Button
                color="secondary"
                variant="contained"
                onClick={()=>history.push('/logup')}
            >
                Create New Account
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
        submit: actions.logIn
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

