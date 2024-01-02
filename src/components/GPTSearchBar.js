import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

function GPTSearchBar() {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store?.config?.lang);
  const dispatch = useDispatch();
  // search movie in tmdb database
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handlGPTSeaerchClick = async () => {
    const gptQuery = `Act as a movie recommendation system and suggest some movies for query : ${searchText.current.value}. only give me names of 5 movies, comma seprated like the example results given ahead. Example result : Gaddar, sholay, don, goalmal, koi mil gaya`;

    const gptReults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptReults.choices) {
      // handle error here
      return;
    }

    const gptMovies = gptReults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handlGPTSeaerchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
