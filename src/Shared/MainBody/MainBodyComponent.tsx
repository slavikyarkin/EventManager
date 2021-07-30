import React from 'react';
import { useHistory } from "react-router-dom";

import Container from '@material-ui/core/Container';
import { Button, ButtonGroup, Card, CardActions, CardContent, DialogActions, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { isTemplateExpression } from 'typescript';

import * as dialogActions from "../Dialog/DialogActions";

const events = [1, 2, 3, 4, 5, 6]

export function MainBodyComponent() {
    const history = useHistory();
    return (
        <Container maxWidth='md'>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                <Button>Edit company</Button>
                <Button>Delete company</Button>
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