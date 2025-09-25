import React, { useEffect } from "react";

const PreloaderAndModals = () => {
  useEffect(() => {
    // Back to Top functionality
    const backToTopBtn = document.querySelector(".backtotop-wrap");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopBtn?.classList.add("active");
      } else {
        backToTopBtn?.classList.remove("active");
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    backToTopBtn?.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);

    // Offcanvas toggle
    const offcanvas = document.querySelector(".offcanvas__info");
    const overlay = document.querySelector(".offcanvas__overlay");
    const openBtn = document.querySelector(".sidebar__toggle");
    const closeBtn = document.querySelector(".offcanvas__close button");

    const openOffcanvas = () => {
      offcanvas?.classList.add("active");
      overlay?.classList.add("active");
    };
    const closeOffcanvas = () => {
      offcanvas?.classList.remove("active");
      overlay?.classList.remove("active");
    };

    openBtn?.addEventListener("click", openOffcanvas);
    closeBtn?.addEventListener("click", closeOffcanvas);
    overlay?.addEventListener("click", closeOffcanvas);

    // Cleanup
    return () => {
      backToTopBtn?.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScroll);
      openBtn?.removeEventListener("click", openOffcanvas);
      closeBtn?.removeEventListener("click", closeOffcanvas);
      overlay?.removeEventListener("click", closeOffcanvas);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="bd-loader-inner">
          <div className="bd-loader">
            {Array.from({ length: 8 }).map((_, i) => (
              <span className="bd-loader-item" key={i}></span>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="backtotop-wrap cursor-pointer">
        <svg
          className="backtotop-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Search Area */}
      <div className="df-search-area">
        <div className="container">
          <div className="df-search-form">
            <div className="df-search-close text-center mb-20">
              <button type="button" className="df-search-close-btn"></button>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="df-search-input mb-10">
                <input type="text" placeholder="Search for product..." />
                <button type="submit">
                  <i className="flaticon-search-1"></i>
                </button>
              </div>
              <div className="df-search-category">
                <span>Search by : </span>
                {["Healthline", "COVID-19", "Surgery", "Surgeon", "Medical research"].map(
                  (cat, i) => (
                    <a href="#" onClick={(e) => e.preventDefault()} key={i}>
                      {cat}
                      {i !== 4 && ", "}
                    </a>
                  )
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>

      {/* Offcanvas */}
      <div className="fix">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/">
                    <img
                      src="assets/imgs/furniture/logo/logo-light.svg"
                      alt="Logo not found"
                    />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button type="button">
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="offcanvas__search mb-25">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="What are you searching for?" />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="mobile-menu fix mb-40"></div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="fal fa-map-marker-alt mr-15"></i>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Dhaka"
                      rel="noopener noreferrer"
                    >
                      12/A, Mirnada City Tower, NYC
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="far fa-phone mr-15"></i>
                    <a href="tel:+088889797697">+088889797697</a>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fal fa-envelope mr-15"></i>
                    <a href="mailto:support@mail.com">support@mail.com</a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  {["facebook-f", "twitter", "youtube", "linkedin"].map((icon, i) => (
                    <li key={i}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className={`fab fa-${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
      <div className="offcanvas__overlay-white"></div>
    </>
  );
};

export default PreloaderAndModals;
