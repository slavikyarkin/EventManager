
import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { CompanyInviteModel, CompanyModel } from "./CompanyModel";
import { CompanyState } from "./CompanyState";
import { connect } from "react-redux";
import { companySelector } from "./CompanySelector";
import * as companyActions from "./CompanyActions";
import { ComponentState } from "./ComponentState";
import { useHistory, useParams } from "react-router-dom";
import { ApplicationState } from "../applicationState";
import { Button, ButtonGroup, Card, CardActions, CardContent, Container, Grid, List, ListItem, ListItemText, TextField, Typography } from "@material-ui/core";
import { useConfirm } from "material-ui-confirm";
import { exit } from "process";


interface OwnProps {

}

interface StateProps {
  company?: CompanyModel;
}

interface DispatchProps {
  loadCompany: (id: number) => void;
  deleteCompany: (id: number) => void;
  inviteAccept: (invite: CompanyInviteModel) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const events = [1, 2, 3, 4, 5, 6];

const CompanyContainer: React.FC<Props> = (props: Props) => {
  let { companyId } = useParams<{ companyId: string | undefined }>();
  const history = useHistory();
  const confirm = useConfirm();

  useEffect(() => {
    if (companyId) {
      props.loadCompany(Number(companyId));
    }
  }, [companyId]);

  useEffect(() => {
    if (window.location.search != "") {
      let params = new URLSearchParams(window.location.search)
      props.inviteAccept({companyId: +(params.get("ObjectId")!), email: params.get("email")! })
    }
  }, []);

  const handleClick = () => {
    confirm({ description: 'Really delete the company?' })
      .then(() => props.deleteCompany(props.company?.id!));
  }

  return (
    <>
      <Container maxWidth='md'>
        <div><h1>{props.company?.name}</h1><h2>{props.company?.description}</h2></div>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
          <Button onClick={() => history.push('/editcompany/' + props.company?.id)}>Edit company</Button>
          <Button onClick={() => history.push('/invitecompany/' + props.company?.id)}>Invite New User</Button>
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
    </>);
}

const mapStateToProps = (state: ApplicationState) => ({
  ...state.companyState
});

const mapDispatchToProps = {
  loadCompany: companyActions.loadCompany,
  deleteCompany: companyActions.deleteCompany,
  inviteAccept: companyActions.inviteAcceptCompany,
}

const Company = connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);

export default Company;
