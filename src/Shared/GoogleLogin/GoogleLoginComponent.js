import React from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';

import {
  makeStyles,
  Button
} from '@material-ui/core';

import { useDispatch } from 'react-redux'
import * as actions from "../Login/LoginActions";

const useStyles = makeStyles((theme) => ({
  social: {
      margin: theme.spacing(1, 0, 1),
  },
}));

const clientId =
  '752253873246-cg9qrlhp0tmtn7cd8vpg4qrfk03br55c.apps.googleusercontent.com';

function LoginGoogle() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    console.log(res.tokenObj.id_token);
    dispatch(actions.logInGoogle(res.tokenObj.id_token));
  };

  const onFailure = (res) => {
    // console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={classes.social}
      onClick={signIn}
    >
      Continue with Google
    </Button>
  );
}

export default LoginGoogle;