import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";

const slides = [
  {
    id: 1,
    // title: "Bright Styles",
    // subtitle: "Happy Smiles!",
    // description: "Comfortable. Trendy. Made for Play.",
    image: slide1,
    // button: "Shop Now",
  },
  {
    id: 2,
    image: slide2,
  },
  {
    id: 3,
    image: slide1,
  },
];

function KidsHeroSlider() {
  return (
    <div className="main-slider">
      <Carousel fade controls indicators interval={4000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              style={{
                height: "400px",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                // backgroundPosition: "center",
                position: "relative",
              }}
            >
              {/* Overlay */}
              {/* <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            >

            </div> */}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default KidsHeroSlider;
