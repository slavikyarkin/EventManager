import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

export function GetCompanyButton () {
  return ( 
    <Button variant="contained" color="primary">
      Get company
    </Button>
    );
}

export function GetCompanyTextField () {
  return ( 
    <TextField id="outlined-basic" label="Id" variant="outlined" />
    );
}


