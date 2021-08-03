import React, { MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../applicationState';
import * as actions from "./CompanyActions";
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';



interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    delete: (id: number) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const CompanyDeleteContainer = (props: Props) => {

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        let str = window.location.pathname

        props.delete(+(str[str.length - 1]));
        close;
    }

    return (
        <Dialog
            open={false}
            onClose={close}
            // aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Delete company?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    Cancel
                </Button>
                <Button onClick={e => handleClick(e)} color="primary" autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    ...state.companyState
});

const mapDispatchToProps = {
    delete: actions.deleteCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDeleteContainer);
