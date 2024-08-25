import "./slider.scss";
import React, { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  function arrowHandler(direction) {
    if (direction === "left") {
      if (imageIndex > 0) {
        setImageIndex((prev) => prev - 1);
      } else {
        setImageIndex((prev) => images.length - 1);
      }
    } else {
      if (imageIndex < images.length - 1) {
        setImageIndex((prev) => prev + 1);
      } else {
        setImageIndex(0);
      }
    }
  }
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => arrowHandler("left")} />
          </div>
          <div className="img-container">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right"
              onClick={() => arrowHandler("right")}
            />
          </div>
          <div className="close-button" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="big-image">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
