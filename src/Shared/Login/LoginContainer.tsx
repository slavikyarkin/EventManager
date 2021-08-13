import React from 'react';

import * as actions from "./LoginActions";
import {
    LoginFormModel,
    LoginModel
} from './LoginModel';

import { ApplicationState } from '../../applicationState';
import Copyright from '../Copyright/CopyrightComponent';

import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import {
    Avatar,
    Box,
    Container,
    Grid,
    makeStyles,
    TextField,
    Typography,
    Button
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoginGoogle from '../GoogleLogin/GoogleLoginComponent';
import { useGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

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

const initialState: LoginModel = {
    email: '',
    password: '',
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    submit: (model: LoginModel) => void;
    load: (params: string) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const LoginContainer = (props: Props) => {
    const classes = useStyles();
    const [state, setState] = React.useState<LoginModel>(initialState);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.submit(state);
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (window.location.search != "") {
            props.load(window.location.search);
        }
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={e => handleSubmit(e)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        autoFocus
                        onChange={(e) => setState({ ...state, email: e.currentTarget.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setState({ ...state, password: e.currentTarget.value })}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/identify">
                                {"Forgot password?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {/* <Typography align="center" component="h2" variant="h6">
                        OR
                    </Typography> */}
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.social}
                        // startIcon={<FacebookIcon />}
                    >
                        Continue with Facebook
                    </Button>
                    <LoginGoogle />
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container >
    );
}

const mapStateToProps = (state: ApplicationState) => ({
});

const mapDispatchToProps = {
    submit: actions.logIn,
    load: actions.validateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

