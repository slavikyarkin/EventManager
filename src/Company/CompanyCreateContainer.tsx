import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../applicationState';
import * as actions from "./CompanyActions";
import { CompanyModel } from './CompanyModel';


interface OwnProps {

}

interface StateProps {
    company?: CompanyModel;
}

interface DispatchProps {
    submit: (model: CompanyModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}



const CompanyCreate: React.FunctionComponent<Props> = (props: Props) => {

    const [companyState, setCompany] = useState({ id: 0, name: '' });

    return (
        <div>
            <TextField id="outlined-basic" label="Name company" variant="outlined" onChange={e => setCompany({ ...companyState, name: e.target.value })} />
            <br />
            <Button variant="contained" color="primary" onClick={() => props.submit(companyState)}>
                Save
            </Button>
        </div >
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        routerModel: state.routerState.router,
    }
};


const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        submit: actions.createCompany
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreate);

