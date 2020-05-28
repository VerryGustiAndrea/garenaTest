import React, { Component } from "react";
import "../scss/TimeLine.scss";
import { connect } from "react-redux";
import { getProgramContent } from "../redux/action/websiteContent";

class TimeLine extends Component {
  constructor() {
    super();
    this.state = {
      programContent: [],
      freshman_program: [],
    };
  }
  getTextContent = async () => {
    await this.props.dispatch(getProgramContent());
    // console.log(
    //   this.props.websiteContent.programContent.data[0].program_content
    // );
    this.setState({
      programContent: this.props.websiteContent.programContent.data[0]
        .program_content,
    });
    // setProgramContent(props.program.data);
  };

  getFreshmanProgram = async () => {
    await this.props.dispatch(getProgramContent());

    this.setState({
      freshman_program: this.props.websiteContent.programContent.data[0]
        .freshman_program,
    });
  };

  stringToHTML = (str) => {
    var doc = new DOMParser().parseFromString(str, "text/html");

    // console.log(doc.body.innerHTML);
    return document.write(doc.body.innerHTML);
  };

  componentDidMount = () => {
    this.getTextContent();
    this.getFreshmanProgram();
  };
  render() {
    return (
      <>
        <div className="TextContent2">
          <h1>Time Line</h1>
        </div>
        <div className="alur">
          <div class="row">
            <div class="kolom">
              <h2>Registration</h2>
              <img className="photoProgram1" src="./assets/Timeline-1.png" />
              <p>Essay and CV Screening</p>
            </div>
            <div class="kolom">
              <h2>Essay and CV Screening</h2>
              <img className="photoProgram1" src="./assets/Timeline-2.png" />
              <p>On-campus Interview</p>
            </div>
            <div class="kolom">
              <h2>On-campus Interview</h2>
              <img className="photoProgram1" src="./assets/Timeline-3.png" />
              <p>Some text..</p>
            </div>
            <div class="kolom">
              <h2>Announcement of Selected Scholars</h2>
              <img className="photoProgram1" src="./assets/Timeline-4.png" />
              <p>Some text..</p>
            </div>
          </div>
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

export default connect(mapStateToProps)(TimeLine);
