import React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function RateSlider({ rating, handleRatingChange, initialRating }) {
  return (
    <>
      {initialRating ? (
        <p>
          Ratings of
          <strong>
            <span> {rating}</span>/10
          </strong>
          or above
        </p>
      ) : (
        <div>Click to filter by rating</div>
      )}
      <Slider
        min={0}
        max={10}
        step={0.5}
        value={rating}
        orientation="horizontal"
        onChange={(value) => handleRatingChange(value)}
      />
    </>
  );
}

export default RateSlider;
