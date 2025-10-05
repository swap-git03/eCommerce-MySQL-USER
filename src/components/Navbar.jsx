import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBoxOpen, FaUser, FaHome, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./custom.css";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/products?search=${encodeURIComponent(q)}` : "/products");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm py-2">
      <div className="container-fluid">
        {/* Logo + Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="logo" className="logo me-2" />
          <span className="fw-semibold text-white">SwapShop</span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarMain">
          {/* Search bar */}
          <form className="d-flex mx-auto nav-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="form-control nav-search-input"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn nav-search-btn" type="submit">
              <FaSearch className="search-icon" />
            </button>
          </form>

          {/* Nav Icons */}
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FaHome /> <span className="ms-1">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                <FaBoxOpen /> <span className="ms-1">Products</span>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart /> <span className="ms-1">Cart</span>
                <span className="cart-count">0</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <FaUser /> <span className="ms-1">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
