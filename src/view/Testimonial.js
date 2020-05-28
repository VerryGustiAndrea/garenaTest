import React, { Component } from "react";
import "../scss/Testimonial.scss";
import { connect } from "react-redux";
import { getAllTestimonial } from "../redux/action/testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

class Testimonial extends Component {
  constructor() {
    super();
    this.state = {
      dataTestimonial: [],
    };
  }
  getDataTestimonial = async () => {
    await this.props.dispatch(getAllTestimonial());
    // console.log(
    //   this.props.websiteContent.programContent.data[0].program_content
    // );
    this.setState({
      dataTestimonial: this.props.testimonial.testimonialData.data,
    });
    // setProgramContent(props.program.data);
  };

  componentDidMount = () => {
    this.getDataTestimonial();
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
          <h1>Testimonial</h1>
          <div className="container">
            <Slider {...settings}>
              {this.state.dataTestimonial.map((e) => {
                return (
                  <div class="flex-container-partner">
                    <div class="row">
                      <div class="column">
                        <div className="Slide">
                          <img className="fotoTesti" src={e.image} />
                        </div>
                      </div>
                      <div class="column">
                        <div className="story">
                          <text>
                            {e.story}
                            <br />
                          </text>
                        </div>
                        <div className="nickname">
                          <text>
                            {e.name}
                            <br />
                          </text>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="contentApply">
            <img className="contentApply" src="./assets/BG-Apply.jpg" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ testimonial }) => {
  return {
    testimonial,
  };
};

export default connect(mapStateToProps)(Testimonial);
