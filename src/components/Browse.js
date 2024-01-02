import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
