import { Avatar, Box, Container, CssBaseline, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../applicationState';
import * as actions from "./CompanyActions";
import { CompanyModel } from './CompanyModel';
import { getEmail } from '../useToken';
import Copyright from '../Shared/Copyright/CopyrightComponent';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

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
const CompanyCreate = (props: Props) => {
    const classes = useStyles();
    const [companyState, setCompany] = useState({ name: '', email: getEmail(), description: '', type: 1 });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.submit(companyState);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create a new company
                </Typography>
                <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                name="nameyourcompany"
                                required
                                fullWidth
                                id="nameyourcompany"
                                label="Name your company"
                                autoFocus
                                variant="outlined"
                                onChange={e => setCompany({ ...companyState, name: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                name="descriptionofyourcompany"
                                required
                                fullWidth
                                id="descriptionofyourcompany"
                                label="Add a description of your company"
                                variant="outlined"
                                onChange={e => setCompany({ ...companyState, description: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <FormLabel component="legend">Choose the type of your company</FormLabel>
                            <RadioGroup
                                defaultValue="1"
                                row
                                aria-label="Company status"
                                name="Choose the type of your company"
                                onChange={e => setCompany({ ...companyState, type: +(e.target.value) })}>
                                <FormControlLabel value="1" control={<Radio />} label="Public" />
                                <FormControlLabel value="2" control={<Radio />} label="Private" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Save
                    </Button>
                </form>
            </div>
        </Container >
    );
}

const mapStateToProps = (state: ApplicationState) => ({
});

const mapDispatchToProps = {
    submit: actions.createCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCreate);

