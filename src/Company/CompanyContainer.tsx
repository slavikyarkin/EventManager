
import React, { useEffect } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { CompanyModel } from "./CompanyModel";
import { CompanyState } from "./CompanyState";
import { connect } from "react-redux";
import { companySelector } from "./CompanySelector";
import * as companyActions from "./CompanyActions";
import { ComponentState } from "./ComponentState";
import { useParams } from "react-router-dom";


interface OwnProps {

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
  let { companyId } = useParams<{ companyId: string | undefined }>();

  useEffect(() => {
    if (companyId) {
      props.loadCompany(Number(companyId));
    }
  }, []);

  return (
    <>
      {props.company ? props.company?.name : "No company found"}
    </>);
}

const mapStateToProps = (state: ComponentState, ownProps: OwnProps) => ({
  company: companySelector(state)
});


const mapDispatchToProps = (dispatch: Dispatch,) => {
  return bindActionCreators({
    loadCompany: companyActions.loadCompany
  }, dispatch);
};

const Company = connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);

export default Company;
