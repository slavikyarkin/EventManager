import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as eventActions from "./EventActions";
import { ComponentState } from "./ComponentState";
import { useParams } from "react-router-dom";
import { EventModel } from "./EventModel";
import { eventSelector } from "./EventSelector";

interface OwnProps {
}

interface StateProps {
  event?: EventModel;
}

interface DispatchProps {
  loadEvent: (id: number) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const EventContainer: React.FC<Props> = (props: Props) => {
  let { eventId } = useParams();
  
  useEffect(() => {
    props.loadEvent(eventId);
  }, []);

  return (
  <>
    {props.event ? props.event?.name : "No event found"}
  </>);
}

const mapStateToProps = (state: ComponentState, ownProps: OwnProps) => ({
  event: eventSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch,) => {
  return bindActionCreators({
    loadEvent: eventActions.loadEvent
  }, dispatch);
};

const Event = connect(mapStateToProps, mapDispatchToProps)(EventContainer);

export default Event;
