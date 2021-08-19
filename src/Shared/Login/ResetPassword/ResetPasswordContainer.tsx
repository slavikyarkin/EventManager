import React from 'react';
import Button from '@material-ui/core/Button';
import './ResetPassword.scss';
import { Avatar, Box, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ResetPasswordModel, ResetPasswordRequestModel, ResetPasswordFormModel } from './ResetPasswordModel';
import PropTypes from 'prop-types';
import { ApplicationState } from '../../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./ResetPasswordActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import Copyright from '../../Copyright/CopyrightComponent';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 1),
    },
    social: {
        margin: theme.spacing(1, 0, 1),
    },
}));


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
    const classes = useStyles();
    const [state, setState] = React.useState<ResetPasswordFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: false });
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
        let error: string= '';
        const reNumber = /(?=.*[0-9])/;
        const reUpper = /(?=.*[A-Z])/;
        const reLower = /(?=.*[a-z])/;
        const reCount = /[0-9a-zA-Z]{8,}/;
        const reFull = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z]{8,}/;

        if (model.confirmNewPassword == '') {
            errors.set('confirmnewpassword', 'Password is required')
        }

        if (model.newPassword !== '' && model.confirmNewPassword !== '') {
            if (model.newPassword !== model.confirmNewPassword) {
                errors.set('newpassword', 'Password mismatch')
                errors.set('confirmnewpassword', 'Password mismatch')
            }
        }

        if (!reCount.test(model.newPassword)) {
            // errors.set('newpassword', 'At least 8 symbols')
            error +='At least 8 symbols;\n\r ';
        }

        if (!reLower.test(model.newPassword)) {
            // errors.set('newpassword', '1 lowercase letter')
            error +='lowercase letters (a-z);\n\r ';
        }

        if (!reUpper.test(model.newPassword)) {
            // errors.set('newpassword', '1 uppercase letter')
            error +='uppercase letters (A-Z);\n\r ';
        }

        if (!reNumber.test(model.newPassword)) {
            // errors.set('newpassword', '1 number')
            error +=`numbers (i.e. 0-9);\n\r `;
        }

        if (!reFull.test(model.newPassword)) {
            errors.set('newpassword', error)       
        }

        return errors;
    }

    const { formData, isLoading } = state;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SaveIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
                <form className={classes.form} onSubmit={e => handleSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="newpassword"
                                label="New password"
                                type="password"
                                id="newpassword"
                                onChange={(e) => setModel({ ...state.formData, newPassword: e.currentTarget.value })}
                                error={state.errors.has('newpassword')}
                                helperText={state.errors.get('newpassword')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmnewpassword"
                                label="Confirm new password"
                                type="password"
                                id="confirmnewpassword"
                                onChange={(e) => setModel({ ...state.formData, confirmNewPassword: e.currentTarget.value })}
                                error={state.errors.has('confirmnewpassword')}
                                helperText={state.errors.get('confirmnewpassword')}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container >
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

