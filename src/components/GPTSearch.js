import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

function GPTSearch() {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BG_URL} alt="background img" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
}

export default GPTSearch;
