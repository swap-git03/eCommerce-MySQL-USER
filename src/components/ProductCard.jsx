import React from "react";
import './custom.css';
import placeholder from "../assets/product.jpg";

export default function ProductCard({ title, price, image }) {
  return (
    <div className="card product-card bg-dark text-white w-100">
      <img src={image || placeholder} alt={title} className="product-img" />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
}
