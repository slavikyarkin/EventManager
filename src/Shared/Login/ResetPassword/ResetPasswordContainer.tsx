import React from 'react';
import Button from '@material-ui/core/Button';
import './ResetPassword.scss';
import { Grid, TextField } from '@material-ui/core';
import { ResetPasswordModel, ResetPasswordRequestModel, ResetPasswordFormModel } from './ResetPasswordModel';
import PropTypes from 'prop-types';
import { ApplicationState } from '../../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./ResetPasswordActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState: ResetPasswordFormModel = {
    formData: {
        newPassword: '',
        confirmNewPassword: '',
    },
    errors: new Map,
    isLoading: false,
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    submit: (model: ResetPasswordRequestModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const ResetPasswordContainer = (props: Props) => {
    const [state, setState] = React.useState<ResetPasswordFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: true });
            let params = new URLSearchParams(window.location.search);

            let req: ResetPasswordRequestModel = {
                password: state.formData.confirmNewPassword,
                code: params.get("code") ?? undefined,
                email: params.get("email") ?? undefined,
                validTo: params.get("validTo") ?? undefined,
            }

            props.submit(req);
        } 
    }

    const setModel = (model: ResetPasswordModel) => {
        const errors = validateModel(model);

        setState({
            ...state,
            formData: model,
            errors: errors,
        });
    }

    const validateModel = (model: ResetPasswordModel): Map<string, string> => {
        let errors: Map<string, string> = new Map;
        if (model.newPassword == '') {
            errors.set('New Password', 'Password is required')
        }
        if (model.confirmNewPassword == '') {
            errors.set('Confirm New Password', 'Password is required')
        }
        if (model.newPassword !== '' && model.confirmNewPassword !== '') {
            if (model.newPassword !== model.confirmNewPassword) {
                errors.set('New Password', 'Password mismatch')
                errors.set('Confirm New Password', 'Password mismatch')
            }
        }

        return errors;
    }

    const history = useHistory();
    const { formData, isLoading } = state;
    return (
        <form className={"reset-password-wrapper"} onSubmit={e => handleSubmit(e)}>
            <h2>Reset Password</h2>
            <TextField required
                error={state.errors.has('New Password')}
                onChange={(e) => setModel({ ...state.formData, newPassword: e.currentTarget.value })}
                id="New Password"
                label="New Password"
                type="password"
                helperText={state.errors.get('New Password')}
            />
            <br />
            <TextField required
                error={state.errors.has('Confirm New Password')}
                onChange={(e) => setModel({ ...state.formData, confirmNewPassword: e.currentTarget.value })}
                id="Confirm New Password"
                label="Confirm New Password"
                type="password"
                helperText={state.errors.get('Confirm New Password')}
            />
            <br />
            <Grid item xs={12}>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                >
                    RESET PASSWORD
                </Button>
            </Grid>
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
        submit: actions.resetPassword
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);

