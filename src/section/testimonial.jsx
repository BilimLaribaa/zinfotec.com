import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import the testimonial data from the new JSON file
import testimonials from "../data/testimonialsdata.json";

const TestimonialSection = () => {
  return (
    <section
      className="furniture-testimonial section-space bg-image"
      style={{
        backgroundImage: `url(/images/demo-accounting-bg.jpg)`,
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrapper-4 is-white mb-40 text-center">
          <span className="section-subtitle-4 mb-10">Testimonials</span>
          <h2 className="section-title-4">Client Feedback</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
          loop
          className="testimonial-active-3"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="furniture-testimonial__item">
                <div className="ft-head">
                  <div className="ft-info">
                    <div className="fs-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa${i < item.rating ? "s" : "l"} fa-star`}
                        ></i>
                      ))}
                    </div>
                    <h5>{item.clientshop}</h5>
                    <span>{item.clientname}</span>
                    <br />
                    <span>{item.shoplocation}</span>
                    <p>{item.feedback}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="navigation__wrapprer text-center">
          <div className="common-slider-navigation">
            <button className="testimonial-button-prev">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button className="testimonial-button-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;