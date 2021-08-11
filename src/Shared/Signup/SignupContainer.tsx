import React from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Box, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ApplicationState } from '../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./SignupActions";
import { connect } from 'react-redux';
import { SignupFormModel, SignupModel, SignupRequestModel } from './SignupModel';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { mapToRequestModel } from './SignupMapper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../Copyright/CopyrightComponent';
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

    const validePassword = (password: string): boolean => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }

    const validateModel = (model: SignupModel): Map<string, string> => {
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

        if (model.password.length < 8) {
            errors.set('Password', 'Password is required')
        }

        if (model.password == model.password.toUpperCase()) {
            errors.set('Password', 'Lower case letters (a-z)')
        }

        if (model.password == model.password.toLowerCase()) {
            errors.set('Password', 'Upper case letters (A-Z)')
        }

        if (!validePassword(model.password)) {
            errors.set('Password', 'At least 8 symbols; 1 uppercase letter; 1 number')
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
                                autoComplete="current-password"
                                onChange={(e) => setModel({ ...state.formData, password: e.currentTarget.value })}
                            // error={state.errors.has('Password')}
                            // helperText={state.errors.get('Password')}
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
                                autoComplete="current-password"
                                onChange={(e) => setModel({ ...state.formData, repeatPassword: e.currentTarget.value })}
                            // error={state.errors.has('Repeat Password')}
                            // helperText={state.errors.get('Repeat Password')}
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

