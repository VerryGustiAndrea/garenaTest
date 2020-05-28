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
          <p>{this.state.programContent}</p>
        </div>

        <div class="flex-container">
          <div className="classProgram">
            <img className="photoProgram1" src="./assets/icon-freshmen.png" />
            <div className="titleClassProgram">
              <h3>Sea Freshman Scholarship Program</h3>
            </div>

            <p
              dangerouslySetInnerHTML={{ __html: this.state.freshman_program }}
            />
          </div>

          <div className="classProgram">
            <img className="photoProgram1" src="./assets/icon-senior.png" />
            <div className="titleClassProgram">
              <h3>Sea Freshman Scholarship Program</h3>
            </div>

            <p
              dangerouslySetInnerHTML={{ __html: this.state.freshman_program }}
            />
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
