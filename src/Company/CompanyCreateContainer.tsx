import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

export function CompanyCreate() {
    return (
        <div>
            <TextField id="outlined-basic" label="Name company" variant="outlined" />
            <br/>
            <Button variant="contained" color="primary">
                Save
            </Button>
        </div>
    );
}


