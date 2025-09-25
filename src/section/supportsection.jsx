import React from "react";

const supports = [
  {
    id: 1,
    title: "Exclusive offers for you",
    description: "Get weekly deals, valuable health information and more.",
    link: "#",
    linkText: "Sign up",
    extraClass: "",
    isApp: false,
  },
  {
    id: 2,
    title: "Join Our Community",
    description: "Get weekly deals, valuable health information and more.",
    link: "#",
    linkText: "Join FREE now",
    extraClass: "is-light-yellow",
    isApp: false,
  },
  {
    id: 3,
    title: "Get our FREE app Now!",
    description: "Get weekly deals, valuable health information and more.",
    extraClass: "is-pale-pink",
    isApp: true,
    apps: [
      { id: "play", img: "template/assets/imgs/app/play-store.png", link: "#" },
      { id: "apple", img: "template/assets/imgs/app/apple-store.png", link: "#" },
    ],
  },
];

const SupportSection = () => {
  return (
    <section className="support-area section-space pb-0">
      <div className="container">
        <div className="row g-5">
          {supports.map((item) => (
            <div
              key={item.id}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
            >
              <div className={`support-item ${item.extraClass}`}>
                <div className="support-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  {/* Normal button link */}
                  {!item.isApp && (
                    <a className="join-btn furniture-btn" href={item.link}>
                      {item.linkText}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  )}

                  {/* App Download Buttons */}
                  {item.isApp && (
                    <div className="mobile__app-download">
                      {item.apps.map((app) => (
                        <a
                          key={app.id}
                          className="app__download"
                          href={app.link}
                        >
                          <img src={app.img} alt="image not found" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
