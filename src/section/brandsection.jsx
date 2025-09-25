import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import the brand data from the new JSON file
import brands from "../data/branddata.json";

const BrandSection = () => {
  return (
    <div className="brand-area pt-100 pb-100">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000} // Smooth continuous flow
          allowTouchMove={false} // Disable manual swipe
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} style={{ width: "150px", height: "150px" }}>
              <div className="brand-item border-0 p-0 text-center">
                <div className="brand-thumb flex items-center justify-center h-[80px]">
                  <img
                    src={brand.img}
                    alt={`brand-${brand.id}`}
                    // style={{
                    //   maxHeight: "100px",
                    //   maxWidth: "200px",
                    //   objectFit: "contain",
                    // }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSection;