import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/indooroutdoorproducts.json";
import featuredData from "../data/indooroutdoorproducts.json";
import trendyData from "../data/indooroutdoorproducts.json";
import bestSellers from "../data/indooroutdoorproducts.json";

const ProductDetails = () => {

  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  const { page, id } = useParams();

  let products = [];

  if (page === "indoor") {
    products = productData.indoor;
  } else if (page === "outdoor") {
    products = productData.outdoor;
  } else if (page === "featured") {
    products = featuredData.featured;
  } else if (page === "trendy") {
    products = trendyData.trendy;
  } else if (page === "best") {
    products = bestSellers.best;
  }



  const product = products?.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

   // ✅ ab product ke baad calculation
  const totalSqFt = width * height;
  const totalPrice = totalSqFt * (product.newPrice || 0);

  return (
    <>
      {/* Product details area start */}
      <div className="product__details-area section-space-medium">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Images */}
            <div className="col-xxl-6 col-lg-6">
              <div className="product__details-thumb-wrapper d-sm-flex align-items-start mr-50">
                {/* Small thumbs */}
                <div className="product__details-thumb-tab mr-20">
                  <nav>
                    <div
                      className="nav nav-tabs flex-nowrap flex-sm-column"
                      id="nav-tab"
                      role="tablist"
                    >
                      {product.images?.map((img, index) => (
                        <button
                          key={index}
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          id={`img-${index + 1}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#img-${index + 1}`}
                          type="button"
                          role="tab"
                          aria-controls={`img-${index + 1}`}
                          aria-selected={index === 0 ? "true" : "false"}
                        >
                          <img src={img} alt="product-sm-thumb" />
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>

                {/* Big images */}
                <div className="product__details-thumb-tab-content">
                  <div className="tab-content" id="productthumbcontent">
                    {product.images?.map((img, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                        id={`img-${index + 1}`}
                        role="tabpanel"
                        aria-labelledby={`img-${index + 1}-tab`}
                      >
                        <div className="product__details-thumb-big w-img">
                          <img src={img} alt="product-big" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="col-xxl-6 col-lg-6">
              <div className="product__details-content pr-80">
                <div className="product__details-top d-sm-flex align-items-center mb-15">
                  <div className="product__details-tag mr-10">
                    <a href="#">{product.category}</a>
                  </div>
                  <div className="fs-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star ${i < (product.rating || 0) ? "fa-solid" : "fa-regular"}`}
                      ></i>
                    ))}
                  </div>
                  <div className="product__details-review-count">
                    <a href="#">{product.reviews || 0} Reviews</a>
                  </div>
                </div>

                <h3 className="product__details-title text-capitalize">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="product__details-price">
                  {/* <span className="old-price">${product.oldPrice}</span> */}
                  <span className="new-price">₹{product.newPrice} Per Square Feet</span>
                </div>

                <p>{product.shortDescription || "No short description available."}</p>

                {/* Quantity + Add to Cart */}
                {/* <div className="product__details-action mb-35">

                  
                  <div className="product__quantity">
                    <div
                      className="square-feet-calculator"
                      style={{ marginTop: "20px" }}
                    >
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          maxWidth: "400px",
                          margin: "0 auto",
                          fontFamily: "Arial, sans-serif",
                          color: "#000",
                        }}
                      >
                       
                        <div
                          style={{
                            display: "flex",
                            gap: "15px",
                            justifyContent: "space-between",
                          }}
                        >
                          
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label
                              htmlFor="width"
                              style={{ marginBottom: "5px" }}
                            >
                              Width (ft):
                            </label>
                            <input
                              id="width"
                              type="number"
                              min="1"
                              value={width}
                              onChange={(e) =>
                                setWidth(Number(e.target.value))
                              }
                              style={{
                                width: "100%",
                                textAlign: "center",
                                padding: "5px",
                              }}
                            />
                          </div>

                          
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label
                              htmlFor="height"
                              style={{ marginBottom: "5px" }}
                            >
                              Height (ft):
                            </label>
                            <input
                              id="height"
                              type="number"
                              min="1"
                              value={height}
                              onChange={(e) =>
                                setHeight(Number(e.target.value))
                              }
                              style={{
                                width: "100%",
                                textAlign: "center",
                                padding: "5px",
                              }}
                            />
                          </div>
                        </div>

                        
                        <div
                          style={{
                            fontWeight: "bold",
                            marginTop: "10px",
                          }}
                        >
                          Total Area:{" "}
                          {isNaN(totalSqFt) ? 0 : totalSqFt} sq.ft
                        </div>

                       
                        <div
                          style={{
                            fontWeight: "bold",
                            marginTop: "5px",
                            color: "green",
                          }}
                        >
                          Total Price: ₹
                          {isNaN(totalPrice) ? 0 : totalPrice}
                        </div>
                      </form>
                    </div>
                  </div>

                  
                  <div className="product__add-cart">
                    <a
                      href="javascript:void(0)"
                      className="fill-btn cart-btn"
                    >
                      <span className="fill-btn-inner">
                        <span className="fill-btn-normal">
                          Add To Cart
                          <i className="fa-solid fa-basket-shopping"></i>
                        </span>
                        <span className="fill-btn-hover">
                          Add To Cart
                          <i className="fa-solid fa-basket-shopping"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div> */}

                {/* Meta */}
                {/* <div className="product__details-meta mb-20">
                  <div className="sku">
                    <span>SKU:</span>
                    <a href="#">{product.sku || "N/A"}</a>
                  </div>
                  <div className="categories">
                    <span>Categories:</span>{" "}
                    {product.categories
                      ? product.categories.map((cat, i) => (
                          <a key={i} href="#">
                            {cat}{i < product.categories.length - 1 ? ", " : ""}
                          </a>
                        ))
                      : "N/A"}
                  </div>
                  <div className="tag">
                    <span>Tags:</span>{" "}
                    {product.tags
                      ? product.tags.map((tag, i) => (
                          <a key={i} href="#">
                            {tag}{i < product.tags.length - 1 ? ", " : ""}
                          </a>
                        ))
                      : "N/A"}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Additional Info Tabs */}
          <div className="product__details-additional-info section-space-medium-top">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4">
                <div className="product__details-more-tab mr-15">
                  <nav>
                    <div
                      className="nav nav-tabs flex-column"
                      id="productmoretab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link"
                        id="nav-additional-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-additional"
                        type="button"
                        role="tab"
                        aria-controls="nav-additional"
                        aria-selected="false"
                      >
                        Additional Information
                      </button>
                      {/* <button
                        className="nav-link"
                        id="nav-review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-review"
                        type="button"
                        role="tab"
                        aria-controls="nav-review"
                        aria-selected="false"
                      >
                        Reviews ({product.reviewsData ? product.reviewsData.length : 0})
                      </button> */}
                    </div>
                  </nav>
                </div>
              </div>

              {/* Tabs Content */}
              <div className="col-xxl-9 col-xl-8 col-lg-8">
                <div className="product__details-more-tab-content">
                  <div className="tab-content" id="productmorecontent">
                    {/* ✅ Description Tab Dynamic */}
                    <div
                      className="tab-pane fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                    >
                      <div className="product__details-des">
                        {product.description ? (
                          product.description.split("\n").map((para, i) => (
                            <p key={i}>{para}</p>
                          ))
                        ) : (
                          <p>No description available.</p>
                        )}
                      </div>
                    </div>

                    {/* ✅ Additional Info Dynamic */}
                    <div
                      className="tab-pane fade"
                      id="nav-additional"
                      role="tabpanel"
                      aria-labelledby="nav-additional-tab"
                    >
                      <div className="product__details-info">
                        <ul>
                          {product.additionalInfo
                            ? Object.entries(product.additionalInfo).map(([key, value], i) => (
                              <li key={i}>
                                <h4>{key}</h4>
                                <span>{value}</span>
                              </li>
                            ))
                            : "No additional info."}
                        </ul>
                      </div>
                    </div>

                    {/* ✅ Reviews Dynamic */}
                    {/* <div
                      className="tab-pane fade"
                      id="nav-review"
                      role="tabpanel"
                      aria-labelledby="nav-review-tab"
                    >
                      <div className="product__details-review">
                        <h3 className="comments-title">
                          {product.reviewsData ? product.reviewsData.length : 0} reviews for “{product.title}”
                        </h3>
                        <div className="latest-comments mb-50">
                          <ul>
                            {product.reviewsData
                              ? product.reviewsData.map((r, i) => (
                                  <li key={i}>
                                    <div className="comments-box d-flex">
                                      <div className="comments-avatar mr-10">
                                        <img src={r.avatar} alt="" />
                                      </div>
                                      <div className="comments-text">
                                        <h5>{r.user}</h5>
                                        <p>{r.comment}</p>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              : "No reviews yet."}
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    {/* End Reviews */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Additional Info Tabs */}
        </div>
      </div>
      {/* Product details area end */}
    </>
  );
};

export default ProductDetails;
