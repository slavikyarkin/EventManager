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

const initialState: SnackbarModel = {
    open: false
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarContainer = (props: Props) => {
  const [state, setState] = React.useState<SnackbarModel>(initialState);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({...state, open: false});
  };

  return (
    <>
      <Snackbar open={state.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
      routerModel: state.routerState.router,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
      submit: actions.snackbar
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer);


