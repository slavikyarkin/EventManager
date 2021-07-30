import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { DialogModel } from './DialogModel';
import { connect } from 'react-redux';
import * as actions from "./DialogActions";
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../applicationState';
import { DialogComponent } from './DialogComponent';



interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps {
}


const mapStateToProps = (state: ApplicationState) => ({
  ...state.dialogState
});

const mapDispatchToProps = {
  close: actions.closeDialog
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(DialogComponent) as any;



