import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

function GPTSearch() {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover md:object-none" src={BG_URL} alt="background img" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
}

export default GPTSearch;
