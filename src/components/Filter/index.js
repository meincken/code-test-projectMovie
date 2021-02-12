import React from "react";
import Slider from "./slider";
import { Slide } from "../../shared/ui-kit";

function Filter({
  handleGenreChange,
  genres,
  handleRatingChange,
  rating,
  itemChecked,
  initialRating,
}) {
  return (
    <>
      {genres
        ? genres.map((genre, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={genre.name}
                value={genre.id}
                id={genre.id}
                checked={itemChecked}
                onChange={(itemChecked) =>
                  handleGenreChange(genre.id, itemChecked.value)
                }
              />
              &nbsp; {genre.name}
            </label>
          ))
        : "Loading ..."}
      <Slide>
        <Slider
          handleRatingChange={handleRatingChange}
          rating={rating}
          initialRating={initialRating}
        />
      </Slide>
    </>
  );
}
export default Filter;
