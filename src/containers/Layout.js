import React from "react";
import { Layout, Row, Col, Icon, message, Button } from "antd";
import "../stylesheets/layout.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Cookies from "universal-cookie";
import axios from "axios";

const { Content, Footer, Sider, Header } = Layout;

class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <Layout>
        <Header>header</Header>
        <Content> 
           {this.props.children}
        </Content>
        <Footer>footer</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
