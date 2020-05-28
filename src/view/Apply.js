import React, { Component } from "react";
import "../scss/Apply.scss";
import { connect } from "react-redux";
import { getProgramContent } from "../redux/action/websiteContent";

class Apply extends Component {
  constructor() {
    super();
    this.state = {
      dataTimeLine: {},
    };
  }

  render() {
    return (
      <>
        <div className="apply">
          <h1>Application are now closed. We'll see you again next year</h1>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ websiteContent }) => {
  return {
    websiteContent,
  };
};

export default connect(mapStateToProps)(Apply);
