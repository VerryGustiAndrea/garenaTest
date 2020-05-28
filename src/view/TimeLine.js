import React, { Component } from "react";
import "../scss/TimeLine.scss";
import { connect } from "react-redux";
import { getProgramContent } from "../redux/action/websiteContent";

class TimeLine extends Component {
  constructor() {
    super();
    this.state = {
      dataTimeLine: {},
    };
  }
  getDataTimeLine = async () => {
    await this.props.dispatch(getProgramContent());
    // console.log(
    //   this.props.websiteContent.programContent.data[0].program_content
    // );
    console.log(this.props.websiteContent.programContent.data[0]);
    this.setState({
      dataTimeLine: this.props.websiteContent.programContent.data[0],
    });
    // setProgramContent(props.program.data);
  };

  componentDidMount = () => {
    this.getDataTimeLine();
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
              <p>{this.state.dataTimeLine.date_regis}</p>
            </div>
            <div class="kolom">
              <h2>Essay and CV Screening</h2>
              <img className="photoProgram1" src="./assets/Timeline-2.png" />
              <p>{this.state.dataTimeLine.date_esay_cvscreen}</p>
            </div>
            <div class="kolom">
              <h2>On-campus Interview</h2>
              <img className="photoProgram1" src="./assets/Timeline-3.png" />
              <p>{this.state.dataTimeLine.date_interview}</p>
            </div>
            <div class="kolom">
              <h2>Announcement of Selected Scholars</h2>
              <img className="photoProgram1" src="./assets/Timeline-4.png" />
              <p>{this.state.dataTimeLine.date_announce}</p>
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
