import React from "react";
// Import the data from the new JSON file
import blogs from "../data/blogdata.json";

const BlogSection = () => {
  return (
    <section className="blog-area theme-bg-2 section-space">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="section-title-wrapper-4 text-center section-title-space">
              <span className="section-subtitle-4 mb-10">Read blog</span>
              <h2 className="section-title-4">Recent Blog</h2>
            </div>
          </div>
        </div>

        {/* Blog Items */}
        <div className="row gy-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="blog-item-4 furniture__blog-item">
                <div className="blog-content-4">
                  <div className="blog-tag-wrapper mb-15">
                    <a className="blog-tag" href="#">{blog.tag}</a>
                  </div>
                  <div className="postbox__meta mb-15">
                    <span><a href="#">{blog.author}</a></span>
                    <span>{blog.date}</span>
                  </div>
                  <h4 className="blog-title">
                    <a href={blog.link} className="text-capitalize">{blog.title}</a>
                  </h4>
                  <a className="round-link" href={blog.link}>
                    <i className="fa-regular fa-angle-right"></i>
                  </a>
                </div>
                <div className="blog-item-thumb w-img">
                  <a href={blog.link}>
                    <img src={blog.image} alt={blog.title} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;