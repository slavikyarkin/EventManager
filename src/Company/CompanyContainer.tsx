
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
import { Button, ButtonGroup, Card, CardActions, CardContent, Container, CssBaseline, Grid, List, ListItem, ListItemText, makeStyles, TextField, Typography } from "@material-ui/core";
import { useConfirm } from "material-ui-confirm";
import { exit } from "process";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

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
  const classes = useStyles();
  let type = props.company?.type ? "Everyone will see your events" : "Only members of this company will see events";

  useEffect(() => {
    if (companyId) {
      props.loadCompany(Number(companyId));
    }
  }, [companyId]);

  useEffect(() => {
    if (window.location.search != "") {
      let params = new URLSearchParams(window.location.search)
      props.inviteAccept({ companyId: +(params.get("ObjectId")!), email: params.get("email")! })
    }
  }, []);

  const handleClick = () => {
    confirm({ description: 'Really delete the company?' })
      .then(() => props.deleteCompany(props.company?.id!));
  }

  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography align="left" component="h1" variant="h4">
              {props.company?.name ?? "Company"}
            </Typography>
          </Grid>
        </Grid>
        <Typography align="left" component="h2" variant="h6">
          {props.company?.description ?? "Company description"}
        </Typography>
        <Typography align="right"color="textSecondary" component="h1" variant="h6">
              {type}
            </Typography>
        <div className={classes.paper}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
            <Button onClick={() => history.push('/invitecompany/' + props.company?.id)}>Invite New User</Button>
            <Button onClick={() => history.push('/editcompany/' + props.company?.id)}>Edit company</Button>
            <Button onClick={handleClick}>Delete company</Button>
          </ButtonGroup>
          <List>

            <ListItem button key={'Add event'} >
              <ListItemText primary={'Add event'} onClick={() => history.push('/company/event/new')} />
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
        </div>
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
