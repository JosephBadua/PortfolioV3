import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleToggler = event => {
    setToggler({
      toggler: event
    });
  };

  useEffect(() => {
    axios.get("/api/information").then(response => {
      setInformation(response.data);
    });
    axios.get("/api/services").then(response => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then(response => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  My name is{" "}
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Full Stack Developer determined to stay on top of the industry
                  and create user-friendly applications. Graduating from an
                  intensive Coding Boot Camp at the University of California,
                  Riverside. I am able to construct responsive and appealing
                  layouts as well as handle both client and server-side
                  requests.
                </p>
                <p>
                  Along with the knowledge to use multiple frameworks, libraries
                  and services such as the Google Cloud Platform, I am also
                  proficient in MySQL, MongoDB, Node.js as well as React,
                  Javascript, CSS, and HTML.
                </p>
                <p>
                  I have worked on multiple team projects constructing
                  applications with real world, marketable uses; offering my
                  talents to create many features. I thrive in team-based
                  environments; always seeking to communicate with others and
                  create a friendly working atmosphere.
                </p>
                <a href={information.cvfile} className="mi-button">
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="What to Expect" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
