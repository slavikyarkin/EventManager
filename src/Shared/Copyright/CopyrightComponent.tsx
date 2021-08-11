import React from "react";
import { Link, Typography } from "@material-ui/core";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://steventmanagerdev01.z13.web.core.windows.net/">
          Event Manager
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }