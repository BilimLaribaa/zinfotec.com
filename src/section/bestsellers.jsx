import React from "react";
// Import the JSON data
import bestSellers from "../data/indooroutdoorproducts.json";

const BestSellers = () => {
  const products = bestSellers.best;
  return (
    <section className="furniture-seller section-space">
      <div className="container">
        <div className="section-title-wrapper-4 mb-40">
          <span className="section-subtitle-4 mb-10">THIS Week</span>
          <h2 className="section-title-4">Best Sellers</h2>
        </div>

        <div className="row g-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="furniture-seller__item">
                <div className="fs-image">
                  <a href={`/productsdetails/best/${item.id}`}>
                    <img
                      src={item.images && item.images[0]}
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="fs-content">
                  <h4 className="product-title">
                    <a href={`/productsdetails/best/${item.id}`}>{item.title}</a>
                  </h4>
                  <span>₹{item.newPrice} Per Square Feet</span>
                  {/* <div className="fs-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star ${i < item.rating ? "fas" : "far"
                          }`}
                      ></i>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;