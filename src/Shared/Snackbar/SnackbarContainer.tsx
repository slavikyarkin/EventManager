import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SnackbarModel } from './SnackbarModel';
import { connect } from 'react-redux';
import * as actions from "./SnackbarActions";
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../applicationState';
import { SnacbarComponent } from './SnackbarComponent';



interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

//   const SnackbarContainer = (props: Props) => {

//   return (
//     <SnacbarComponent
//   );
// }

const mapStateToProps = (state: ApplicationState) => ({
  ...state.snackbarState
});

const mapDispatchToProps = {
  hide: actions.hideSnackbar
}

export const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(SnacbarComponent) as any;



