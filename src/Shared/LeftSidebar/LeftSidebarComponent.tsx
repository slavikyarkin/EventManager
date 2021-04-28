import { Button, makeStyles, SwipeableDrawer } from "@material-ui/core";
import React, { Component } from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export class LeftSidebarComponent extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            openSidebar: false
        };
    }

    


    list = (anchor: string) => (
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>

    );

    render() {

        const onOpen = () => { };
        const onClose = () => { };
        return (

            <SwipeableDrawer
                anchor={'left'}
                open={true}
                onOpen={onOpen}
                onClose={onClose}

            >
                {this.list('left')}
            </SwipeableDrawer>

        );
    }

}

