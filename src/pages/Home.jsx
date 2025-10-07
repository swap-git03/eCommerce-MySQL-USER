import React from "react";
import Hero from "../components/Hero"; // import your hero carousel
import Products from "../pages/Products";

export default function Home() {
  return (
    <div>
      {/* Hero carousel component */}
      <Hero />

      {/* Products section on home */}
      <div className="container my-4">
        <h2 className="text-white mb-3">Featured Products</h2>
        <Products />
      </div>
    </div>
  );
}
