import React from "react";
import aboutData from "../data/aboutdata.json";

const AboutDetails = () => {
  return (
    <>
      {/* About Area */}
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {/* Left Side Content */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="wow fadeInRight animated" data-wow-delay="0.3s">
                <div className="mb-20">
                  <span className="mb-15" style={{ color: "#0E4D94" }}>
                    {aboutData.subtitle}
                  </span>
                  <br /><br />
                  <h3>{aboutData.title}</h3>
                </div>
                {/* Description1 with bold word */}
                {aboutData.description1.map((item, index) => (
                  <p key={index}>
                    {item.before}
                    <strong style={{ color: "#0E4D94" }}>{item.bold}</strong>
                    {item.after}
                  </p>
                ))}

                {/* Description2 */}
                {aboutData.description2.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}

                <img
                  className="w-100"
                  src={aboutData.imageLeft}
                  alt="about left"
                />
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <img
                className="w-100"
                src={aboutData.imageRight}
                alt="about right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Video Area */}
      <div className="postbox__thumb postbox__video w-img p-relative">
        <a href="#">
          <img src={aboutData.video.thumbnail} alt="video thumbnail" />
        </a>
        <a
          href={aboutData.video.url}
          className="play-btn pulse-btn popup-video"
        >
          <i className="fas fa-play"></i>
        </a>
      </div>
    </>
  );
};

export default AboutDetails;
