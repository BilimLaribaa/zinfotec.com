import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards.jsx";
import config from "../config";
import Spinner from "../components/spinner.jsx"; 

const IndoorOutdoorProducts = ({ page }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/ProductFetch`)
      .then((res) => res.json())
      .then((data) => {
        // 🔹 yaha filter karenge product_category ke hisaab se
        const filtered = (data || []).filter(
          (item) => item.product_category?.toLowerCase() === page.toLowerCase()
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [page]); // 👈 page change hoga to dubara fetch

  if (loading) {
    return <Spinner size="60px" />;
  }

  const handleInquiryClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bd-product__area section-space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="bd-product__result mb-30">
              <h4>{products.length} Item On List</h4>
            </div>
          </div>
        </div>

        <Card
          products={products}
          page={page}
          handleInquiryClick={handleInquiryClick}
        />
      </div>
    </section>
  );
};

export default IndoorOutdoorProducts;
