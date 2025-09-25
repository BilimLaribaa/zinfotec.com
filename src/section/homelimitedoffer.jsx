import React, { useEffect, useState } from "react";
import bannerData from "../data/offerbannerdata.json";

const FurnitureLimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [status, setStatus] = useState("coming-soon"); // "coming-soon" | "live" | "expired"

  // 🔹 Time difference calculate karne ka function
  const calculateTimeLeft = (start, end) => {
    const now = new Date();

    if (now < start) {
      setStatus("coming-soon");
      const diff = +start - +now;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else if (now >= start && now <= end) {
      setStatus("live");
      const diff = +end - +now;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      setStatus("expired");
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    const bannerWithTimer = bannerData.find((b) => b.type === "timer");

    if (!bannerWithTimer) {
      // agar json me timer nahi hai to bhi default Coming Soon dikhao
      setStatus("coming-soon");
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const startDate = new Date(bannerWithTimer.startDate);
    const endDate = new Date(bannerWithTimer.endDate);

    setTimeLeft(calculateTimeLeft(startDate, endDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startDate, endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="furniture-ad pb-100">
      <div className="container">
        <div className="row g-4">
          {bannerData.map((banner) => (
            <div
              key={banner.id}
              className={`${
                banner.type === "discount"
                  ? "col-xxl-7 col-xl-6"
                  : "col-xxl-5 col-xl-6"
              }`}
            >
              <div
                className="furniture-ad__item h-100 bg-image"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div
                  className={`fad-content ${
                    banner.type === "timer" ? "fad-timer text-center" : ""
                  }`}
                >
                  <h6 className="text-white mb-20 text-uppercase">
                    {banner.title}
                  </h6>
                  <h2 className="text-capitalize text-white mb-30">
                    {banner.heading}
                  </h2>

                  {/* ✅ Timer / Coming Soon / Expired */}
                  {banner.type === "timer" && (
                    <div className="countdown-wrapper">
                      {status === "coming-soon" && (
                        <>
                          <h4 className="text-white mb-20">Coming Soon</h4>
                          <ul>
                            <li><span>{timeLeft.days}</span>days</li>
                            <li><span>{timeLeft.hours}</span>hrs</li>
                            <li><span>{timeLeft.minutes}</span>mins</li>
                            <li><span>{timeLeft.seconds}</span>secs</li>
                          </ul>
                        </>
                      )}

                      {status === "live" && (
                        <>
                          <h4 className="text-white mb-20">Offer Ends In</h4>
                          <ul>
                            <li><span>{timeLeft.days}</span>days</li>
                            <li><span>{timeLeft.hours}</span>hrs</li>
                            <li><span>{timeLeft.minutes}</span>mins</li>
                            <li><span>{timeLeft.seconds}</span>secs</li>
                          </ul>
                        </>
                      )}

                      {status === "expired" && (
                        <>
                          <h4 className="text-white mb-20">Offer Expired</h4>
                          <ul>
                            <li><span>0</span>days</li>
                            <li><span>0</span>hrs</li>
                            <li><span>0</span>mins</li>
                            <li><span>0</span>secs</li>
                          </ul>
                        </>
                      )}
                    </div>
                  )}

                  {/* ✅ Button Condition */}
                  {banner.type === "discount" ||
                  (banner.type === "timer" && status === "live") ? (
                    <a className="border__btn-f mt-35" href={banner.btnLink}>
                      {banner.btnText}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureLimitedOffer;
