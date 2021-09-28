import React, { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
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

function LoginFacebook() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const fbResponse = (response) => {
    console.log(response);
    dispatch(actions.logInFacebook(response.accessToken));
  }
  return (
    <FacebookLogin
      appId="223750043009109"
      callback={fbResponse}
      fields="name,email,picture"
      render={renderProps => (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.social}
          onClick={renderProps.onClick}
        >
          Continue with Facebook
        </Button>
      )}
    />
  //   <FacebookLogin
  //         textButton="LOGIN WITH FACEBOOK"
  //         appId= "223750043009109"
  //         fields="name,email,picture"
  //         callback={fbResponse}
  //       />
  );
}

export default LoginFacebook;