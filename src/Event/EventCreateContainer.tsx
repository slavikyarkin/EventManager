import React from 'react';
import { ApplicationState } from '../applicationState';
import { EventEditModel, EventModel } from "./EventModel";
import * as actions from "./EventActions";
import { connect } from 'react-redux';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { mapToEditModel } from './EventMapper';
import { getEmail } from '../useToken';
import { useParams } from 'react-router-dom';

interface OwnProps {
}

interface StateProps {
    event?: EventModel;
}

interface DispatchProps {
    submit: (model: EventEditModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const EventCreateContainer: React.FC<Props> = (props: Props) => {
    // let { companyId } = useParams<{ companyId: string | undefined }>();
    const [state, setState] = React.useState<EventModel>(props.event!);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let email: string = getEmail() ?? '';
        setState({ ...state, email: email});
        props.submit(mapToEditModel(state));
    }

    return (
        <form id="form" onSubmit={(e) => handleSubmit(e)}>
            <TextField required
                id="name"
                label="Name event"
                variant="outlined"
                onChange={e => setState({ ...state, name: e.target.value })}
            />
            <br />
            <TextField required
                id="holdingDate"
                label="Holding date"
                type="date"
                onChange={(e) => setState({ ...state, holdingDate: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br />
            <RadioGroup aria-label="Event status" name="Event status" onChange={e => setState({ ...state, type: +(e.target.value) })}>
                <FormControlLabel value="1" control={<Radio />} label="Public" />
                <FormControlLabel value="2" control={<Radio />} label="Private" />
            </RadioGroup>
            {/* <br />
            <TextField required
                onChange={(e) => setState({ ...state, email: e.target.value })}
                id="email"
                label="Email"
                type="email"
            /> */}
            <br />
            <TextField
                id="eventDescription"
                label="Event description"
                fullWidth
                variant="outlined"
                onChange={e => setState({ ...state, description: e.target.value })}
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    ...state.eventState
});

const mapDispatchToProps = {
    submit: actions.editEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateContainer);