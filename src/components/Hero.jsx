import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import './custom.css';

export default function Hero() {
  return (
    <section className="hero-section mb-5">
      <Carousel indicators={true} controls={true} fade={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Latest Electronics</h3>
            <p>Grab the hottest gadgets at unbeatable prices!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fashion Trends 2025</h3>
            <p>Upgrade your wardrobe with our exclusive collections.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Home Essentials</h3>
            <p>Everything you need to make your home cozy & modern.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
