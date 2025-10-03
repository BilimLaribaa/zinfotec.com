import React from "react";
import config from "../config";

const Card = ({ products = [], page, handleInquiryClick }) => {
  return (
    <div className="row g-4">
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.product_id} className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="product-item furniture__product">
              <div className="product-thumb theme-bg-2">
                <a href={`/productsdetails/${page}/${item.product_id}`}>
                  <img
                    src={`${config.IMAGE_BASE_URL}/${item.product_image}`}
                    alt={item.product_name}
                  />

                </a>
              </div>
              <div className="product-content">
                <div className="product-tag">
                  <span>{item.product_status}</span>
                </div>
                <h4 className="product-title">
                  <a href={`/productsdetails/${page}/${item.product_id}`}>
                    {item.product_name}
                  </a>
                </h4>
                {/* <div className="fs-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star ${
                          i < item.rating ? "fas" : "far"
                        }`}
                      ></i>
                    ))}
                  </div> */}
                <div className="product-price">
                  {item.product_price === 0 ? (
                    <span
                      className="product-inquiry-price"
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={handleInquiryClick}
                    >
                      Inquiry for price
                    </span>
                  ) : (
                    <span className="product-new-price">
                      ₹{item.product_price} Per Square Feet
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Card;
