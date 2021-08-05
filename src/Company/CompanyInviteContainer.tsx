import React, { MouseEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../applicationState';
import * as actions from "./CompanyActions";
import { TextField } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { CompanyInviteModel } from './CompanyModel';



interface OwnProps {
}

interface StateProps {
    companyInvite?: CompanyInviteModel;
}

interface DispatchProps {
    inviteCompany: (model: CompanyInviteModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const CompanyInviteContainer = (props: Props) => {
    let { companyId } = useParams<{ companyId: string | undefined }>();
    const [state, setModel] = useState({ companyId: +(companyId!), email: '' });
    
    // const [companyState, setCompany] = useState(props.company!);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.inviteCompany(state);
    }

    return (
        <form id="form" onSubmit={e => handleSubmit(e)}>
            <h2>Invite New User</h2>
            <TextField required
                onChange={(e) => setModel({ ...state, email: e.currentTarget.value })}
                id="email"
                label="Email"
                type="email"
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
                Invite
            </Button>
        </form>
    );
}

const mapStateToProps = (state: ApplicationState) => ({  
});

const mapDispatchToProps = {
    inviteCompany: actions.inviteCompany,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInviteContainer);
