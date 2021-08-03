import React, { MouseEvent } from 'react';
import { useHistory } from "react-router-dom";

import Container from '@material-ui/core/Container';
import { Button, ButtonGroup, Card, CardActions, CardContent, DialogActions, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { isTemplateExpression } from 'typescript';
import { connect } from 'react-redux';

import * as dialogActions from "../Dialog/DialogActions";
import * as companyActions from "../../Company/CompanyActions";
import { ApplicationState } from '../../applicationState';
import { DialogOpenAction } from '../Dialog/DialogData';
import { useConfirm } from "material-ui-confirm";

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    showDialog: (model: DialogOpenAction) => void;
    deleteCompany: (id: number) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const events = [1, 2, 3, 4, 5, 6];

const MainBodyContainer = (props: Props) => {
    const history = useHistory();
    const confirm = useConfirm();
    

    const handleClick = () => {
        let str = window.location.pathname;
        confirm({description: 'Really delete the company?'})
            .then(() => props.deleteCompany(+(str[str.length - 1])) );
            
        // props.showDialog({content: 'Really delete the company?'})
    }

    return (
        <Container maxWidth='md'>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                <Button>Edit company</Button>
                <Button onClick={handleClick}>Delete company</Button>
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
    showDialog: dialogActions.openDialog,
    deleteCompany: companyActions.deleteCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyContainer);
