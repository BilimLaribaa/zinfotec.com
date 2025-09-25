import * as React from "react";
import { useEffect } from "react";


const Header = () => {

  useEffect(() => {
    // Check if the meanmenu is already initialized on the element
    // This simple check prevents re-initialization
    if (!document.querySelector(".mobile-menu.mean-container")) {
      $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: '<i class="fa fa-plus"></i>',
      });
    }
  }, []);
  
  const openOffcanvas = () => {
    document.querySelector(".offcanvas__info")?.classList.add("info-open");
    document.querySelector(".offcanvas__overlay")?.classList.add("overlay-open");
  };

  const closeOffcanvas = () => {
    document.querySelector(".offcanvas__info")?.classList.remove("info-open");
    document.querySelector(".offcanvas__overlay")?.classList.remove("overlay-open");
  };

  return (
    <>
      {/* Header area start */}
      <header>
        <div className="header">
          {/* Header Top Area */}
          <div className="header-top-area grocery__top-header">
            <div className="header-layout-4">
              <div className="header-to-main d-none d-sm-flex">
                <div className="link-text">
                  <span>
                    <img src="/images/call.png" alt="" />
                  </span>
                  <a href="tel:+91 9272627262">+91 9272627262</a>
                  <span>
                    <img src="/images/call.png" alt="" />
                  </span>
                  <a href="tel:+91 9372717271">+91 9372717271</a>
                </div>
                <div className="header-top-notice d-none d-lg-block">
                  <p>
                    Our Experts Waiting For You! <a href="/contact">Contact Now</a> 
                  </p>
                </div>
                {/* <div className="tp-header-top-menu d-flex align-items-center justify-content-end"> */}
                  {/* Language */}
                  {/* <div className="header-lang-item header-lang">
                    <span className="header-lang-toggle text-white" id="header-lang-toggle">
                      English
                    </span>
                    <ul>
                      <li><a className="furniture-clr-hover" href="#">Spanish</a></li>
                      <li><a className="furniture-clr-hover" href="#">Russian</a></li>
                      <li><a className="furniture-clr-hover" href="#">Portuguese</a></li>
                    </ul>
                  </div> */}
                  {/* Currency */}
                  {/* <div className="header-lang-item tp-header-currency">
                    <span className="header-currency-toggle text-white" id="header-currency-toggle">USD</span>
                    <ul>
                      <li><a className="furniture-clr-hover" href="#">EUR</a></li>
                      <li><a className="furniture-clr-hover" href="#">CHF</a></li>
                      <li><a className="furniture-clr-hover" href="#">GBP</a></li>
                      <li><a className="furniture-clr-hover" href="#">KWD</a></li>
                    </ul>
                  </div> */}
                  {/* Settings */}
                  {/* <div className="header-lang-item tp-header-setting">
                    <span className="header-setting-toggle text-white" id="header-setting-toggle">Setting</span>
                    <ul>
                      <li><a className="furniture-clr-hover" href="#">My Profile</a></li>
                      <li><a className="furniture-clr-hover" href="wishlist.html">Wishlist</a></li>
                      <li><a className="furniture-clr-hover" href="cart.html">Cart</a></li>
                      <li><a className="furniture-clr-hover" href="#">Logout</a></li>
                    </ul>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* Header Bottom / Mega Menu */}
          <div className="header-layout-4 header-bottom">
            <div id="header-sticky" className="header-4">
              <div className="mega-menu-wrapper">
                <div className="header-main-4">
                  <div className="header-left">
                    <div className="header-logo">
                      <a href="index-2.html">
                        <img src="/images/logo (1).png" alt="logo not found" />
                      </a>
                    </div>
                    <div className="mean__menu-wrapper furniture__menu d-none d-lg-block">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                          <ul>
                            <li className="has-dropdown">
                              <a href="/">Home</a>
                              {/* <ul className="submenu">
                                <li><a href="pharmacy.html">Pharmacy Store</a></li>
                                <li><a href="index-2.html">Furniture Store</a></li>
                                <li><a href="grocery.html">Grocery Store</a></li>
                              </ul> */}
                            </li>
                            <li><a href="/about">About</a></li>
                            {/* <li className="has-dropdown">
                              <a href="product.html">Shop</a>
                              <ul className="submenu">
                                <li><a href="product.html">Product</a></li>
                                <li><a href="product-details.html">Product Details</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                              </ul>
                            </li> */}
                            <li className="has-dropdown">
                              <a href="">Products</a>
                              <ul className="submenu">
                                <li><a href="/indoor">Indoor Products</a></li>
                                <li><a href="/outdoor">Outdoor Products</a></li>
                                {/* <li><a href="store.html">Find a Store</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                <li><a href="error.html">404</a></li> */}
                              </ul>
                            </li>
                            {/* <li className="has-dropdown">
                              <a href="blog.html">Blog</a>
                              <ul className="submenu">
                                <li><a href="blog.html">Blog Default</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                              </ul>
                            </li> */}
                            <li><a href="/contact">Contact Us</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div className="header-right d-inline-flex align-items-center justify-content-end">
                    {/* Search
                    <div className="header-search d-none d-xxl-block">
                      <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4443 13.4445L16.9999 17" stroke="white" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.2222 8.11111C15.2222 12.0385 12.0385 15.2222 8.11111 15.2222C4.18375 15.2222 1 12.0385 1 8.11111C1 4.18375 4.18375 1 8.11111 1C12.0385 1 15.2222 4.18375 15.2222 8.11111Z"
                              stroke="white" strokeWidth="2" />
                          </svg>
                        </button>
                      </form>
                    </div>

                    Wishlist / Cart
                    <div className="header-action d-flex align-items-center ml-30">
                      <div className="header-action-item">
                        <a href="wishlist.html" className="header-action-btn">
                          <span className="header-action-badge bg-furniture">3</span>
                        </a>
                      </div>
                      <div className="header-action-item">
                        <a href="cart.html" className="header-action-btn cartmini-open-btn">
                          <span className="header-action-badge bg-furniture">12</span>
                        </a>
                      </div>
                    </div> */}

                    {/* Hamburger / Offcanvas Toggle */}
                    <div className="header-humbager ml-30">
                      <button type="button" className="sidebar__toggle" onClick={openOffcanvas}>
                        <div className="bar-icon-2">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header area end */}

      {/* Offcanvas area start */}
      <div className="fix">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/">
                    <img src="/images/logo (1).png" alt="logo not found" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={closeOffcanvas}><i className="fal fa-times"></i></button>
                </div>
              </div>

              {/* <div className="offcanvas__search mb-25">
                <form action="#">
                  <input type="text" placeholder="What are you searching for?" />
                  <button type="submit"><i className="far fa-search"></i></button>
                </form>
              </div> */}

              <div className="mobile-menu fix mb-40">
                {/* Mobile menu links can be added dynamically */}
              </div>

              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="fal fa-map-marker-alt"></i></div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Plot+No.102-103,+Ar-Rehman+Apartment,+Lane+No.+4,+Times+Colony,+Kat+Kat+Gate,+Aurangabad-431001./@19.8946097,75.344979,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">
                        Plot No.102-103, Ar-Rehman Apartment, Lane No. 5, Times Colony, Kat Kat Gate, Aurangabad-431001.
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="far fa-phone"></i></div>
                    <div className="offcanvas__contact-text"><a href="tel:+91 9272627262">+91 9272627262</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="fal fa-envelope"></i></div>
                    <div className="offcanvas__contact-text"><a href="mailto:info@zinfotec.com">info@zinfotec.com</a></div>
                  </li>
                </ul>
              </div>

              <div className="offcanvas__social">
                <ul>
                  <li><a href="https://www.facebook.com/people/Zinfotec-Technologies-Pvt-Ltd/61558454674729/?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://x.com/zinfotec_india"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCEUrDz1fUJxOIEDRKwhlTxQ"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="https://www.instagram.com/accounts/login/?next=%2Fzinfotec.india%2F&source=omni_redirect"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay" onClick={closeOffcanvas}></div>
      <div className="offcanvas__overlay-white"></div>
      {/* Offcanvas area end */}
    </>
  );
};

export default Header;
