import * as React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer area start */}
      <footer className="footer-bg">
        <div className="footer-area pt-100 pb-20">
          <div className="footer-style-4">
            <div className="container">
              <div className="footer-grid-3">
                <div className="footer-widget-4">
                  <div className="footer-logo mb-35">
                    <a href="/">
                      <img
                        src="/images/logo (1).png"
                        alt="image bnot found"
                      />
                    </a>
                  </div>
                  <p>
                    Unleash the Power of LED Screens.
                  </p>
                  <div className="theme-social">
                    <a className="furniture-bg-hover" href="https://www.facebook.com/people/Zinfotec-Technologies-Pvt-Ltd/61558454674729/?mibextid=ZbWKwL">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a className="furniture-bg-hover" href="https://x.com/zinfotec_india">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a className="furniture-bg-hover" href="https://www.youtube.com/channel/UCEUrDz1fUJxOIEDRKwhlTxQ">
                      <i className="fa-brands fa-youtube" />
                    </a>
                    <a className="furniture-bg-hover" href="https://www.instagram.com/accounts/login/?next=%2Fzinfotec.india%2F&source=omni_redirect">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
                {/* <div className="footer-widget-4">
              <div className="footer-widget-title">
                <h4>Services</h4>
              </div>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="error.html">Log In</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="error.html">Return Policy</a>
                  </li>
                  <li>
                    <a href="error.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="faq.html">Shopping FAQs</a>
                  </li>
                </ul>
              </div>
            </div> */}
                <div className="footer-widget-4">
                  <div className="footer-widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About us </a>
                      </li>
                      <li>
                        <a href="/indoor">Products</a>
                      </li>
                      {/* <li>
                        <a href="blog.html">Clients</a>
                      </li> */}
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      {/* <li>
                        <a href="/contact">Privacy Policy</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="footer-widget footer-col-4">
                  <div className="footer-widget-title">
                    <h4>Contact</h4>
                  </div>
                  <div className="footer-info mb-35">
                    <div className="footer-info-item d-flex align-items-start">
                      <div className="footer-info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-envelope furniture-icon" />
                        </span>
                      </div>
                      <div className="footer-info-text">
                        <a className="furniture-clr-hover" href="mailto:info@zinfotec.com">
                          info@zinfotec.com
                        </a>
                        <br />
                        <a className="furniture-clr-hover" href="mailto:sales@zinfotec.com">
                          sales@zinfotec.com
                        </a>
                      </div>
                    </div>

                    <div className="footer-info-item d-flex align-items-start pb-15 pt-15">
                      <div className="footer-info-icon mr-20">
                        <span>
                          {" "}
                          <i className="fa-solid fa-location-dot furniture-icon" />
                        </span>
                      </div>
                      <div className="footer-info-text">
                        <a
                          className="furniture-clr-hover"
                          target="_blank"
                          href="https://www.google.com/maps/search/Plot+No.102-103,+Ar-Rehman+Apartment,+Lane+No.+4,+Times+Colony,+Kat+Kat+Gate,+Aurangabad-431001./@19.8946097,75.344979,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                        >
                          <b>Address (Aurangabad)</b>
                          <br />
                          Plot No.102-103, Ar-Rehman Apartment, Lane No. 5, Times Colony, Kat Kat Gate, Aurangabad-431001.
                        </a>
                        <br /><br />
                        <a
                          className="furniture-clr-hover"
                          target="_blank"
                          href="https://www.google.com/maps/search/Krishna+Complex+Inside+Harihar+Complex+Village+Dapode,+Taluka+Bhiwandi-421302+Backside+of+Gajanan+Petrol+Pump+Near+Mankoli/@19.2497809,72.9698969,13.25z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                        >
                          <b>Address (Mumbai)</b>
                          <br />
                          Krishna Complex Inside Harihar Complex Village Dapode, Taluka Bhiwandi-421302 Backside of Gajanan Petrol Pump Near Mankoli
                        </a>
                      </div>
                    </div>
                    <div className="footer-info-item d-flex align-items-start">
                      <div className="footer-info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-phone furniture-icon" />
                        </span>
                      </div>
                      <div className="footer-info-text">
                        <a className="furniture-clr-hover" href="tel:9272627262">
                          +91 9272627262
                        </a>
                        <br />
                        <a className="furniture-clr-hover" href="tel:9372717271">
                          +91 9372717271
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-copyright-area b-t">
            {/* <div className="footer-copyright-wrapper">
              <div className="footer-copyright-text">
              </div>
              <div className="footer-payment d-flex align-items-center gap-2">
                <div className="footer-payment-item mb-0">
                  <div className="footer-payment-thumb">
                    <img src="assets/imgs/icons/payoneer.png" alt="" />
                  </div>
                </div>
                <div className="footer-payment-item mb-0">
                  <div className="footer-payment-thumb">
                    <img src="assets/imgs/icons/maser.png" alt="" />
                  </div>
                </div>
                <div className="footer-payment-item">
                  <div className="footer-payment-thumb">
                    <img src="assets/imgs/icons/paypal.png" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="footer-conditions">
              <div
                className="footer-copyright-text"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {/* Left Side */}
                <p className="mb-0">
                  © 2025, All Rights Reserved.{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="furniture-clr-hover"
                    href="https://mindsinmotion.in/"
                    style={{ textDecoration: "underline" }}
                  >
                    Minds in Motion Foundation.
                  </a>
                </p>

                {/* Right Side */}
                <p className="mb-0">
                  Design &amp; Developed By:{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="furniture-clr-hover"
                    href="https://bilimtechnologies.com/"
                    style={{ textDecoration: "underline" }}
                  >
                    Bilim Technologies Pvt. Ltd.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer area end */}

    </>

  )
}

export default Footer;