import React, { MouseEvent } from 'react';
import { useHistory } from "react-router-dom";

import Container from '@material-ui/core/Container';
import { Button, ButtonGroup, Card, CardActions, CardContent, DialogActions, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { isTemplateExpression } from 'typescript';
import { connect } from 'react-redux';

import * as dialogActions from "../Dialog/DialogActions";
import { ApplicationState } from '../../applicationState';
import { DialogOpenAction } from '../Dialog/DialogData';


interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    showDialog: (model: DialogOpenAction) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const events = [1, 2, 3, 4, 5, 6];

const MainBodyContainer = (props: Props) => {
    const history = useHistory();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        props.showDialog({content: 'Delete company?'})
        // if (state.errors.size == 0) {
        //     setState({ ...state, isLoading: true });
        //     props.submit(mapToRequestModel(state.formData));
        // } 
    }

    return (
        <Container maxWidth='md'>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                <Button>Edit company</Button>
                <Button onClick={(e) => handleClick(e)}>Delete company</Button>
            </ButtonGroup>
            <List>

                <ListItem button key={'Add event'} >
                    <ListItemText primary={'Add event'} onClick={() => history.push('/event/new')} />
                </ListItem>

            </List>
            <Grid container spacing={4}>
                {events.map((event) => (
                    <Grid item key={event} xs={12}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Event {event}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => history.push('/event/' + event)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    ...state.companyState
});

const mapDispatchToProps = {
    showDialog: dialogActions.openDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyContainer);
