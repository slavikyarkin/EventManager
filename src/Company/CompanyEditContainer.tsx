import React, { MouseEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../applicationState';
import * as actions from "./CompanyActions";
import { Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { CompanyModel } from './CompanyModel';
import { getEmail } from '../useToken';
import { useParams } from 'react-router-dom';


const initialState: CompanyModel = {
    id: 0,
    name: '',
    email: '',
    description: '',
    type: 1,
}

interface OwnProps {
}

interface StateProps {
    company?: CompanyModel;
}

interface DispatchProps {
    edit: (model: CompanyModel) => void;
    loadCompany: (id: number) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const CompanyEditContainer = (props: Props) => {
    let { companyId } = useParams<{ companyId: string | undefined }>();
    // const [companyState, setCompany] = useState({ id: 0, name: '', email: '', description: '', type: 0 });
    const [companyState, setCompany] = React.useState<CompanyModel>(initialState);
    

    useEffect(() => {
        if (companyId) {
            props.loadCompany(Number(companyId));
        }
    }, []);

    useEffect(() => {
        setCompany(props.company!)
    }, [props.company]);

    // const [companyState, setCompany] = useState(props.company!);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.edit({id: companyState.id, name: companyState.name, description: companyState.description, type: companyState.type});
    }

    return (
        <form id="form" onSubmit={e => handleSubmit(e)}>
            <h2>Edit company</h2>
            <TextField
                id="outlined-basic"
                label="Name company"
                variant="outlined"
                onChange={e => setCompany({ ...companyState, name: e.target.value })}
                value={companyState.name}
            />
            <br />
            <TextField
                id="outlined-basic"
                label="Name description"
                fullWidth
                variant="outlined"
                onChange={e => setCompany({ ...companyState, description: e.target.value })}
                value={companyState.description}
            />
            <br />
            <RadioGroup value={(companyState.type).toString()} aria-label="Company status" name="Company status" onChange={e => setCompany({ ...companyState, type: +(e.target.value) })}>
                <FormControlLabel value="1" control={<Radio />} label="Public" />
                <FormControlLabel value="2" control={<Radio />} label="Private" />
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
        </form>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    ...state.companyState
});

const mapDispatchToProps = {
    edit: actions.editCompany,
    loadCompany: actions.loadCompany,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEditContainer);
