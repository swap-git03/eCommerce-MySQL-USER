import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  const sections = {
    "Top Categories": ["Mobiles", "Electronics", "Fashion", "Home & Kitchen", "Beauty"],
    "Trending": ["Wireless Earbuds", "Smart Watches", "Running Shoes", "LED TVs", "Backpacks"],
    "Policies": ["Privacy Policy", "Return Policy", "Security", "Terms", "Pricing"],
    "Company": ["About Us", "Careers", "Blog", "Press", "Contact"],
  };

  return (
    <footer className="footer text-light">
      <div className="footer-top py-5">
        <div className="container">
          <div className="row g-4">
            {/* Logo & Description */}
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="logo" className="footer-logo" />
                <div className="ms-2">
                  <h5 className="mb-0 text-white">SwapShop</h5>
<small style={{ color: '#ccc' }}>Quality — Delivered</small>
                </div>
              </div>
              <p className="text-muted small">
                Shop the latest products across categories. Fast delivery & secure payments.
              </p>
              <div className="mt-3 d-flex align-items-center">
                <div className="app-badge me-2"><FaMobileAlt /></div>
                <div className="small text-muted">Get our App</div>
              </div>
            </div>

            {/* Dynamic Sections */}
            {Object.entries(sections).map(([heading, items]) => (
              <div key={heading} className="col-md-2">
                <h6 className="footer-heading">{heading}</h6>
                <ul className="footer-list">
                  {items.map((item) => (
                    <li key={item} className="hoverable">{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="col-md-3">
              <h6 className="footer-heading">Contact</h6>
              <div className="small text-muted mb-2">📞 +91 98765 43210</div>
              <div className="small text-muted mb-2">✉️ help@swapshop.com</div>
              <div className="d-flex gap-2 mt-3">
                <span className="social"><FaGithub /></span>
                <span className="social"><FaLinkedin /></span>
                <span className="social"><FaTwitter /></span>
                <span className="social"><FaEnvelope /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom py-3 border-top border-dark">
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <small className="text-light">© {new Date().getFullYear()} MyShop — All Rights Reserved</small>
    <small className="text-light">Made with ❤️ and creativity</small>
  </div>
</div>

    </footer>
  );
}
