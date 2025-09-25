import React from "react";

// ✅ Reusable Star Component
const StarRating = ({ color }) => (
  <svg width="116" height="16" viewBox="0 0 116 16" fill="none">
    <path
      d="M15.7 5.93L10.67 4.62L8.76 0.56C8.6 0.22 8.25 0 7.87 0C7.49 0 7.14 0.22 6.98 0.56L5.07 4.62L0.83 5.27C0.47 5.32 0.17 5.58 0.05 5.93C-0.06 6.28 0.02 6.67 0.28 6.93L3.37 10.11L2.64 14.60C2.58 14.97 2.74 15.35 3.05 15.56C3.35 15.78 3.76 15.80 4.09 15.62L7.87 13.53L11.65 15.62C11.80 15.70 11.97 15.74 12.13 15.74C12.33 15.74 12.53 15.68 12.70 15.56C13.01 15.35 13.16 14.97 13.10 14.60L12.37 10.11L15.47 6.93C15.72 6.67 15.81 6.28 15.70 5.93Z"
      fill={color}
    />
  </svg>
);

const LedRating = () => {
  return (
    <>
      

      {/* ✅ Rating Section Dynamic */}
      <section className="furniture-rating overflow-hidden theme-bg-2">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6">
            <div className="furniture-rating__left-item">
              <div className="furniture-ad__item frl-item bg-furniture">
                <div className="fad-content">
                  <h6 className="text-white mb-20 text-uppercase">HOT DEAL LED</h6>
                  <h2 className="text-capitalize text-white">
                    Live LED <br /> Your Love
                  </h2>
                  <a className="border__btn-f mt-35 bg-white text-black" href="/indoor">
                    Buy Now <span><i className="fa-regular fa-angle-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Rating Dots */}
          <div className="col-xl-6">
            <div className="furniture-rating__right-item">
              <img className="w-100" src="/images/5-advantages-of-Transparent-LED-Display-in-Applications-www.bibiled.com1_.jpg" alt="image" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LedRating;
