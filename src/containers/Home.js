import PropTypes from "prop-types";
import React, { Component } from "react";
import { Row, Col, Menu, Select, Icon, Steps, Button, message } from "antd";

import { Lang as T } from "../languages";

class HomepageLayout extends Component {
  state = {};
  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <p> This is  my home </p> 
    );
  }
}

HomepageLayout.propTypes = {
  children: PropTypes.node
};

export default HomepageLayout;
