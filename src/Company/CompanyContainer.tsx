
import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { CompanyModel } from "./CompanyModel";
import { CompanyState } from "./CompanyState";
import { connect } from "react-redux";
import { companySelector } from "./CompanySelector";
import * as companyActions from "./CompanyActions";


interface OwnProps {
  companyId: number;
}

interface StateProps {
  company?: CompanyModel;
}

interface DispatchProps {
  loadCompany: (id: number) => void;
}

interface Props extends OwnProps, StateProps, DispatchProps {
}

const CompanyContainer: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.loadCompany(props.companyId);
  }, []);

  return (
  <>
    {props.company ? props.company?.name : "No company found"}
  </>);
}

const mapStateToProps = (state: CompanyState, ownProps: OwnProps) => ({
  company: companySelector(state)
});


const mapDispatchToProps = (dispatch: Dispatch,) => {
  return bindActionCreators({
    loadCompany: companyActions.loadCompany
  }, dispatch);
};

const Company = connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);

export default Company;
