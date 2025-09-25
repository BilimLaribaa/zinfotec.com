import React from "react";

import breadcrumbData from "../data/breadcrumb.json";

const Breadcrumb = ({ page }) => {

  const data = breadcrumbData[page];

  if (!data) return null;

  return (
    <div className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
      {/* Background */}
      <div
        className="breadcrumb__thumb"
        style={{ backgroundImage: `url(${data.background})` }}
      ></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="breadcrumb__wrapper text-center">
              {/* Title */}
              <h2 className="breadcrumb__title">{data.title}</h2>

              {/* Path Menu */}
              <div className="breadcrumb__menu">
                <nav>
                  <ul>
                    {data.path &&
                      data.path.map((item, index) => (
                        <li key={index}>
                          <span>
                            {item.url ? (
                              <a href={item.url}>{item.name}</a>
                            ) : (
                              item.name
                            )}
                          </span>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
