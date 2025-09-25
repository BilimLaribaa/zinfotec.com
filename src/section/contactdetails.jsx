import React, { useState } from "react";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("date", formData.date);
    form.append("message", formData.message);

    try {
    const res = await fetch("http://localhost:5000/sendmail", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
      const data = await res.json();
      setResponseMsg(data.message);
    } catch (error) {
      setResponseMsg("Something went wrong, please try again later.");
    }
  };

  return (
    <>
      {/* Contact area start */}
      <div className="contact-area section-space">
        <div className="container">
          <div className="row g-5">
            {/* Location (bigger div) */}
            <div className="col-xxl-6 col-xl-6 col-lg-12">
              <div className="contact-info-item text-center h-100">
                <div className="contact-info-icon">
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                  </span>
                </div>
                <div className="contact-info-content">
                  <h4>Aurangabad</h4>
                  <p>
                    <a href="https://www.google.com/maps/search/Plot+No.102-103,+Ar-Rehman+Apartment,+Lane+No.+5,+Times+Colony,+Kat+Kat+Gate,+Aurangabad-431001./@19.8946097,75.344979,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">
                      Plot No.102-103, Ar-Rehman Apartment, Lane No. 5, Times Colony, Kat Kat Gate, Aurangabad-431001.
                    </a>
                  </p>
                </div>
                <br />
                <div className="contact-info-content">
                  <h4>Mumbai</h4>
                  <p>
                    <a href="https://www.google.com/maps/search/Krishna+Complex+Inside+Harihar+Complex+Village+Dapode,+Taluka+Bhiwandi-421302+Backside+of+Gajanan+Petrol+Pump+Near+Mankoli/@19.2497809,72.9698969,13.25z?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D">
                      Krishna Complex Inside Harihar Complex Village Dapode, Taluka Bhiwandi-421302 Backside of Gajanan Petrol Pump Near Mankoli
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email + Phone (side by side) */}
            <div className="col-xxl-6 col-xl-6 col-lg-12">
              <div className="row g-4">
                {/* Email */}
                <div className="col-md-6">
                  <div className="contact-info-item text-center h-100">
                    <div className="contact-info-icon">
                      <span>
                        <i className="fa-light fa-envelope"></i>
                      </span>
                    </div>
                    <div className="contact-info-content">
                      <h4>Our Email Address</h4>
                      <br />
                      <span>
                        <a href="mailto:info@zinfotec.com">info@zinfotec.com</a>
                      </span>
                      <br />
                      <span>
                        <a href="mailto:sales@zinfotec.com">sales@zinfotec.com</a>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <div className="contact-info-item text-center h-100">
                    <div className="contact-info-icon">
                      <span>
                        <i className="fa-thin fa-phone"></i>
                      </span>
                    </div>
                    <div className="contact-info-content">
                      <h4>Contact Phone Number</h4>
                      <span>
                        <a href="tel:+91 9272627262">+91 9272627262</a>
                      </span>
                      <br />
                      <span>
                        <a href="tel:+91 9372717271">+91 9372717271</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form + Map (unchanged) */}
          <div className="contact-wrapper pt-80">
            <div className="row gy-50">
              {/* Map */}
              <div className="col-xxl-6 col-xl-6">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5306.212358785297!2d75.32980897545596!3d19.87974135580652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987116105b99%3A0xab72f9b879f24c0f!2sZinfotec%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756880769949!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="col-xxl-6 col-xl-6">
                <div className="contact-from">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact__from-input">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name*"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="contact__from-input">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="contact__from-input">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="contact__from-input">
                          <input
                            type="date"
                            name="date"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact__from-input">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="appointment__btn">
                          <button className="fill-btn" type="submit">
                            <span className="fill-btn-inner">
                              <span className="fill-btn-normal">
                                send now<i className="fa-regular fa-angle-right"></i>
                              </span>
                              <span className="fill-btn-hover">
                                send now<i className="fa-regular fa-angle-right"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                        {responseMsg && (
                          <p style={{ marginTop: "10px" }}>{responseMsg}</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact area end */}
    </>
  );
};

export default ContactDetails;
