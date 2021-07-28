import React from 'react';
import Button from '@material-ui/core/Button';
import './Identify.scss';
import { Grid, Link, TextField } from '@material-ui/core';
import { IdentifyFormModel, IdentifyModel } from './IdentifyModel';
import PropTypes from 'prop-types';
import { ApplicationState } from '../../../applicationState';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from "./IdentifyActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    const [state, setState] = React.useState<IdentifyFormModel>(initialState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.size == 0) {
            setState({ ...state, isLoading: true });
            props.submit(state.formData);
        } 
    }

    const setModel = (model: IdentifyModel) => {
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

    const validateModel = (model: IdentifyModel): Map<string, string> => {
        let errors: Map<string, string> = new Map;
        if (model.email == '') {
            errors.set('Email', 'Email is required');
        } else if (!validateEmail(model.email)) {
            errors.set('Email', 'Email is invalid');
        }

        return errors;
    }

    const history = useHistory();
    const { formData, isLoading } = state;
    return (
        <form className={"identify-wrapper"} onSubmit={e => handleSubmit(e)}>
            <h2>Email</h2>
            <TextField required
                error={state.errors.has('Email')}
                onChange={(e) => setModel({ ...state.formData, email: e.currentTarget.value })}
                id="email"
                label="Email"
                type="email"
                helperText={state.errors.get('Email')}
            />
            <br />
            <Grid item xs={12}>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                >
                    Submit
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
        submit: actions.identify
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IdentifyContainer);

