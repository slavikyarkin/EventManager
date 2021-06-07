import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { ApplicationState } from '../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./LogupActions";
import { connect } from 'react-redux';
import { LogupFormModel, LogupModel, LogupRequestModel } from './LogupModel';
import './Logup.scss';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { mapToRequestModel } from './LogupMapper';

const initialState: LogupFormModel = {
    formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    },
    errors: new Map,
    isLoading: false,
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    submit: (model: LogupRequestModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const LogupContainer = (props: Props) => {
    const [state, setState] = React.useState<LogupFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: true });
            props.submit(mapToRequestModel(state.formData));
        } 
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
        if (model.firstName == '') {
            errors.set('First Name', 'First Name is required')
        }
        if (model.lastName == '') {
            errors.set('Last Name', 'Last Name is required')
        }
        if (model.email == '') {
            errors.set('Email', 'Email is required');
        } else if (!validateEmail(model.email)) {
            errors.set('Email', 'Email is invalid');
        }
        if (model.password == '') {
            errors.set('Password', 'Password is required')
        }
        if (model.repeatPassword == '') {
            errors.set('Repeat Password', 'Password is required')
        }
        if (model.password !== '' && model.repeatPassword !== '') {
            if (model.password !== model.repeatPassword) {
                errors.set('Password', 'Password mismatch')
                errors.set('Repeat Password', 'Password mismatch')
            }
        }

        return errors;
    }

    const { formData, isLoading } = state;
    return (
        <form className={"logup-wrapper"} onSubmit={e => handleSubmit(e)}>
            <h2>Logup</h2>
            <TextField required
                error={state.errors.has('First Name')}
                onChange={(e) => setModel({ ...state.formData, firstName: e.currentTarget.value })}
                id="First Name"
                label="First Name"
                helperText={state.errors.get('First Name')}
            />
            <br />
            <TextField required
                error={state.errors.has('Last Name')}
                onChange={(e) => setModel({ ...state.formData, lastName: e.currentTarget.value })}
                id="Last Name"
                label="Last Name"
                helperText={state.errors.get('Last Name')}
            />
            <br />
            <TextField
                id="Date of birth"
                label="Date of birth"
                type="date"
                onChange={(e) => setModel({ ...state.formData, lastName: e.currentTarget.value })}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="Email"
                label="Email"
                type="email"
                helperText={state.errors.get('Email')}
            />
            <br />
            <TextField required
                error={state.errors.has('Password')}
                onChange={(e) => setModel({ ...state.formData, password: e.currentTarget.value })}
                id="Password"
                label="Password"
                type="password"
                helperText={state.errors.get('Password')}
            />
            <br />
            <TextField required
                error={state.errors.has('Repeat Password')}
                onChange={(e) => setModel({ ...state.formData, repeatPassword: e.currentTarget.value })}
                id="Repeat password"
                label="Repeat password"
                type="password"
                helperText={state.errors.get('Repeat Password')}
            />
            <br />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isLoading}
            >
                LOGUP
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

export default connect(mapStateToProps, mapDispatchToProps)(LogupContainer);

