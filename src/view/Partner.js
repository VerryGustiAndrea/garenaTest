import React, { Component } from "react";
import "../scss/Partner.scss";
import { connect } from "react-redux";
import { getAllUniversity } from "../redux/action/university";
import { getAllFaculty } from "../redux/action/faculty";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

class Partner extends Component {
  constructor() {
    super();
    this.state = {
      dataUniversity: [],
      dataFaculty: [],
      filterFaculty1: [],
    };
  }
  getDataUniversity = async () => {
    await this.props.dispatch(getAllUniversity());
    // console.log(
    //   this.props.websiteContent.programContent.data[0].program_content
    // );
    // console.log(this.props.university.universityData.data);
    this.setState({
      dataUniversity: this.props.university.universityData.data,
    });
    // setProgramContent(props.program.data);
  };

  getDataFaculty = async () => {
    await this.props.dispatch(getAllFaculty());
    // console.log(
    //   this.props.websiteContent.programContent.data[0].program_content
    // );
    console.log(this.props.faculty.facultyData.data);
    this.setState({
      dataFaculty: this.props.faculty.facultyData.data,
    });
    var newArray = this.props.faculty.facultyData.data.filter(function (el) {
      return el.univ_id == 1;
    });
    // console.log(newArray);
    this.setState({
      filterFaculty1: newArray,
    });
  };

  componentDidMount = () => {
    this.getDataUniversity();
    this.getDataFaculty();
  };
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="TextContent2">
          <h1>Partner University</h1>
          <div className="container">
            <Slider {...settings}>
              {this.state.dataUniversity.map((e) => {
                return (
                  <div class="flex-container-partner">
                    {/* <div class="grid-container"> */}
                    <div className="titleSlide">
                      <p>{e.univ_name}</p>
                    </div>
                    <div class="row">
                      <div class="column">
                        <div className="Slide1">
                          <img className="photoProgram1" src={e.univ_logo} />
                        </div>
                      </div>
                      <div class="column">
                        <div className="faculty">
                          {this.state.filterFaculty1.map((a) => {
                            return (
                              <text>
                                {a.name}
                                <br />
                              </text>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* <div class="flex-container">
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
        </div> */}
      </>
    );
  }
}

const mapStateToProps = ({ university, faculty }) => {
  return {
    university,
    faculty,
  };
};

export default connect(mapStateToProps)(Partner);
