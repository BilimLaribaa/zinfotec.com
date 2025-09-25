import React from "react";
// Import the data from the new JSON file
import offers from "../data/offersdata.json";

const FurnitureOffers = () => {
  return (
    <section className="furniture-off pb-100">
      <div className="container">
        <div className="row g-4">
          {offers.map((offer, index) => (
            <div className="col-lg-6" key={index}>
              <a
                href={offer.link}
                className="furniture-off__item bg-image d-block"
                style={{ backgroundImage: `url(${offer.img})` }}
              >
                <span className="fo-discount text-white">{offer.discount}</span>
                <h3 className="text-capitalize text-white">{offer.title}</h3>
                <div className="solid-btn mt-30">
                  Buy Now
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureOffers;