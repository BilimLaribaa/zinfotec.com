import React from "react";
import WhyChoose from "../data/whychoose.json";

const WhyChooseUs = () => {
  return (
    <section className="support-area section-space pb-0">
      <div className="container">
        <div className="row g-5">
          <h2 className="text-center">Why Choose Us?</h2>
          {WhyChoose.map((item) => (
            <div
              key={item.id}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
            >
              <div
                className={`support-item ${item.extraClass}`}
                style={{
                  minHeight: "190px", // ✅ sabhi card ki height same
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="support-content" style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", marginTop: "10px", textAlign: "center" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
