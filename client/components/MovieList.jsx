import React from 'react';
import { useSelector } from 'react-redux';
import MovieTile from './MovieTile';

const MovieList = () => {
  const movies = useSelector((globalState) =>  globalState.movies)


  return (

    <div className='movie__list'>
      {movies.reverse().map(movie => <MovieTile  movie={movie} key={movie.id}/>)}
    </div>
  );
};

export default MovieList;

