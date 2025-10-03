import React, { useEffect } from "react";

const PreloaderAndModals = () => {


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

    </>
  );
};

export default PreloaderAndModals;
