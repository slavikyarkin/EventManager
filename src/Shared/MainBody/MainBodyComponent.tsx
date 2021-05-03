import React from 'react';
import { useHistory } from "react-router-dom";

import Container from '@material-ui/core/Container';
import { Button, Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { isTemplateExpression } from 'typescript';

const events = [1, 2, 3, 4, 5, 6]

export function MainBodyComponent() {
    const history = useHistory();
    return (
        <Container maxWidth='md'>
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