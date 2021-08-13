import React from 'react';
import Button from '@material-ui/core/Button';
import './Identify.scss';
import { Avatar, Box, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import { IdentifyFormModel, IdentifyModel } from './IdentifyModel';
import { ApplicationState } from '../../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./IdentifyActions";
import { connect, useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
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

const initialState: IdentifyFormModel = {
    formData: {
        email: '',
    },
    errors: new Map,
    isLoading: false,
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    submit: (model: IdentifyModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const IdentifyContainer = (props: Props) => {
    const classes = useStyles();
    const [state, setState] = React.useState<IdentifyFormModel>(initialState);
useDispatch()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: false });
            props.submit(state.formData);
        }
    }

    const setModel = (model: IdentifyModel) => {
        setState({
            ...state,
            formData: model,
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SearchIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Please enter your email address
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
                        onChange={(e) => setModel({ ...state, email: e.currentTarget.value })}
                    />
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
            <Box mt={8}>
                <Copyright />
            </Box>
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
        submit: actions.identify
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IdentifyContainer);

