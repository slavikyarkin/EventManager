import React from 'react';

import { ApplicationState } from '../../applicationState';
import * as actions from "./SignupActions";
import { SignupFormModel, SignupModel, SignupRequestModel } from './SignupModel';
import { mapToRequestModel } from './SignupMapper';
import Copyright from '../Copyright/CopyrightComponent';

import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Grid,
    makeStyles,
    TextField,
    Typography,
    Button
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const initialState: SignupFormModel = {
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
    submit: (model: SignupRequestModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const SignupContainer = (props: Props) => {
    const classes = useStyles();
    const [state, setState] = React.useState<SignupFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: false });
            props.submit(mapToRequestModel(state.formData));
        }
    }

    const setModel = (model: SignupModel) => {
        setState({
            ...state,
            formData: model,
        });
    }

    const setModelPassword = (model: SignupModel) => {
        const errors = validatePassword(model);

        setState({
            ...state,
            formData: model,
            errors: errors,
        });
    }

    const validatePassword = (model: SignupModel): Map<string, string> => {
        let errors: Map<string, string> = new Map;
        let error: string= '';
        const reNumber = /(?=.*[0-9])/;
        const reUpper = /(?=.*[A-Z])/;
        const reLower = /(?=.*[a-z])/;
        const reCount = /[0-9a-zA-Z]{8,}/;
        const reFull = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z]{8,}/;

        if (model.repeatPassword == '') {
            errors.set('repeatpassword', 'Password is required')
        }

        if (model.password !== '' && model.repeatPassword !== '') {
            if (model.password !== model.repeatPassword) {
                errors.set('password', 'Password mismatch')
                errors.set('repeatpassword', 'Password mismatch')
            }
        }

        if (!reCount.test(model.password)) {
            // errors.set('password', 'At least 8 symbols')
            error +='At least 8 symbols;\n\r ';
        }

        if (!reLower.test(model.password)) {
            // errors.set('password', '1 lowercase letter')
            error +='lowercase letters (a-z);\n\r ';
        }

        if (!reUpper.test(model.password)) {
            // errors.set('password', '1 uppercase letter')
            error +='uppercase letters (A-Z);\n\r ';
        }

        if (!reNumber.test(model.password)) {
            // errors.set('password', '1 number')
            error +=`numbers (i.e. 0-9);\n\r `;
        }

        if (!reFull.test(model.password)) {
            errors.set('password', error)       
        }

        return errors;
    }

    const { formData, isLoading } = state;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={e => handleSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setModel({ ...state.formData, firstName: e.currentTarget.value })}
                            // error={state.errors.has('First Name')}
                            // helperText={state.errors.get('First Name')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setModel({ ...state.formData, lastName: e.currentTarget.value })}
                            // error={state.errors.has('Last Name')}                  
                            // helperText={state.errors.get('Last Name')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="dateofbirth"
                                label="Date of birth"
                                name="dateofbirth"
                                autoComplete="bday"
                                type="date"
                                onChange={(e) => setModel({ ...state.formData, dateOfBirth: e.currentTarget.value })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type="email"
                                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                            // error={state.errors.has('Email')}
                            // helperText={state.errors.get('Email')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => setModelPassword({ ...state.formData, password: e.currentTarget.value })}
                                error={state.errors.has('password')}
                                helperText={state.errors.get('password')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="repeatpassword"
                                label="Repeat password"
                                type="password"
                                id="repeatpassword"
                                onChange={(e) => setModelPassword({ ...state.formData, repeatPassword: e.currentTarget.value })}
                                error={state.errors.has('repeatpassword')}
                                helperText={state.errors.get('repeatpassword')}
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
                        Sign up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/signin">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
        </Container >
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    ...state.singupState
});

const mapDispatchToProps = {
    submit: actions.signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);

