import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function GPTMovieSuggestions() {
  const {movieNames, movieResults} = useSelector(store=>store?.gpt)
  if(!movieNames)return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div>
    {movieNames.map((movieName,i )=> <MovieList title={movieName}  movies={movieResults[i]}/>)}
     
    </div>
    </div>
  )
}

export default GPTMovieSuggestions