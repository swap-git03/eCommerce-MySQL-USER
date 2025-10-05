/* eslint-disable no-unused-vars */
import React from "react";
import './custom.css';
import placeholder from "../assets/product.jpg"; // placeholder image

export default function ProductCard({ title, price, image }) {
  return (
  <div className="card product-card bg-dark text-white h-100">
  <img src={image} alt={title} className="product-img" />
  <div className="card-body">
    <h6 className="card-title">{title}</h6>
    <p className="card-price">${price}</p>
  </div>
</div>

  );
}
