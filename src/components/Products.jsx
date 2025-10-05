import React from "react";
import ProductCard from "./ProductCard";

const dummyProducts = [
  { title: "Wireless Earbuds", price: 49.99, image: "/assets/product1.jpg" },
  { title: "Smart Watch", price: 129.99, image: "/assets/product2.jpg" },
  { title: "Running Shoes", price: 89.99, image: "/assets/product3.jpg" },
  { title: "LED TV", price: 399.99, image: "/assets/product4.jpg" },
  { title: "Backpack", price: 59.99, image: "/assets/product5.jpg" },
  { title: "Sunglasses", price: 29.99, image: "/assets/product6.jpg" },
];

export default function Products() {
  return (
   <div className="container my-5">
  <h3 className="text-white mb-4">Featured Products</h3>
  <div className="row g-4">
    {dummyProducts.map((prod, idx) => (
      <div key={idx} className="col-12 col-md-4"> {/* 3 cards per row on md+ */}
        <ProductCard {...prod} />
      </div>
    ))}
  </div>
</div>

    
  );
}
