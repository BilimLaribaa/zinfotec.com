import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bannerData from "../data/bannerData.json";

const HomeBanner = () => {
  return (
    <section
      className="banner-4 p-relative furniture-banner-area fix bg-image pb-100"
      data-background="assets/imgs/furniture/banner/bg.png"
      data-bg-color="#F5F1E6"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".banner-dot" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="banner-active"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="banner-item-4 d-flex align-items-end">
              <div className="container">
                <div className="row g-5 align-self-end">
                  <div className="col-xxl-6 col-lg-6">
                    <div className="banner-content-4 furniture__content">
                      <span>{item.subtitle}</span>
                      {/* Using dangerouslySetInnerHTML for <br> inside JSON */}
                      <h2
                        className="banner-title-4"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p>{item.description}</p>
                      <div className="banner-btn-wrapper furniture__btn-group">
                        <a className="solid-btn" href={item.btn1Link}>
                          {item.btn1Text}
                          <span>
                            <i className="fa-regular fa-angle-right"></i>
                          </span>
                        </a>
                        <a className="border__btn-banner" href={item.btn2Link}>
                          {item.btn2Text}
                          <span>
                            <i className="fa-regular fa-angle-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-lg-6">
                    <div className="banner-thumb-wrapper-4 p-relative">
                      <div className="banner-thumb-4 p-relative z-index-1">
                        <img src={item.image} alt="banner" />
                      </div>
                      <div className="furniture-circle d-none d-lg-block">
                        <img src={item.circle} alt="circle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <div className="banner-dot-inner">
        <div className="banner-dot"></div>
      </div>
    </section>
  );
};

export default HomeBanner;
