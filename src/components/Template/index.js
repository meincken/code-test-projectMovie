import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Header from "../Header/";
import Filter from "../Filter/";
import { Genre, Movies } from "../../shared/ui-kit";

let Movie = lazy(() => import("../Movies/"));

function Template() {
  const [initialized, setInitialized] = useState(false);
  const [initialRating, setInitialRating] = useState(false);
  const [dataMovies, setMovie] = useState({ results: [] });
  const [dataGenres, setGenre] = useState({ genres: [] });
  const [rating, setRating] = useState(3);

  const fetchData = async () => {
    const movies = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=c1c3571bfe8f7183c8bfd30ee219b73a`
    );
    const genres = await axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c1c3571bfe8f7183c8bfd30ee219b73a`
    );

    setMovie(movies.data);
    setGenre(genres);
  };

  useEffect(() => {
    if (!initialized) {
      fetchData();
      setInitialized(true);
    }
  }, [initialized]);

  const handleGenreChange = (element, itemChecked) => {
    setInitialRating(false);
    dataGenres.data.genres.filter((genre) =>
      genre.id === element ? (genre.itemChecked = !genre.itemChecked) : ""
    );
    setGenre(dataGenres);
    let checkedFilters = dataGenres.data.genres
      .filter((genre) => genre.itemChecked === true)
      .map((selected) => selected.id);
    dataMovies.results.filter((movie) =>
      compareArrays(movie.genre_ids, checkedFilters)
        ? (movie.visible = true)
        : (movie.visible = false)
    );
  };

  const handleRatingChange = (value) => {
    setInitialRating(true);
    setRating(value);
    let checkedFilters = dataGenres.data.genres
      .filter((genre) => genre.itemChecked === true)
      .map((selected) => selected.id);
    dataMovies.results.filter((movie) =>
      movie.vote_average >= value &&
      compareArrays(movie.genre_ids, checkedFilters)
        ? (movie.visible = true)
        : (movie.visible = false)
    );
    setMovie(dataMovies);
  };

  function compareArrays(genre_ids, checkedFilters) {
    return checkedFilters.every((value) => genre_ids.includes(value));
  }

  return (
    <main>
      <Header />
      <Genre>
        {dataGenres.data ? (
          <Filter
            handleGenreChange={handleGenreChange}
            genres={dataGenres.data.genres}
            handleRatingChange={handleRatingChange}
            rating={rating}
            initialRating={initialRating}
          />
        ) : (
          "Loading..."
        )}
      </Genre>
      <Movies>
        <Suspense fallback={<div>Movie info...</div>}>
          {dataMovies.results.map((movie, index) => (
            <Movie
              key={movie.id}
              index={index}
              movie={movie}
              genres={dataGenres.data}
            />
          ))}
        </Suspense>
      </Movies>
    </main>
  );
}

export default Template;
