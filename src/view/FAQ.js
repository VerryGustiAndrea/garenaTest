import React, { Component } from "react";
import "../scss/FAQ.scss";
import { connect } from "react-redux";
import { getProgramContent } from "../redux/action/websiteContent";

class FAQ extends Component {
  constructor() {
    super();
    this.state = {
      dataFAQ: [],
    };
  }
  getDataFAQ = async () => {
    await this.props.dispatch(getProgramContent());

    this.setState({
      dataFAQ: this.props.websiteContent.programContent.data[0].faq_content,
    });
  };
  componentDidMount = () => {
    this.getDataFAQ();
  };
  render() {
    return (
      <>
        <div className="faq">
          <h1>FAQ</h1>
        </div>
        <div className="faqQuestion">
          <p dangerouslySetInnerHTML={{ __html: this.state.dataFAQ }} />
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

export default connect(mapStateToProps)(FAQ);
