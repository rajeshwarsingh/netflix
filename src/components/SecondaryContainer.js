import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-2 md:pl-2 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movie"}
            movies={movies.upcomingMovies}
          />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
