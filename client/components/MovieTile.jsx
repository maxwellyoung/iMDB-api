import React from 'react';
import { useDispatch } from "react-redux"
import {setAsWatched} from '../actions/movies'

const MovieTile = (props) => {
  const dispatch = useDispatch()
  const movie = props.movie

  const handleClick = () => {
    dispatch(setAsWatched(movie.id))
  }
  return (
    <div className='movie__container is-centered' key='movie.id'>
      <figure className="image is-600x600 is-inline-block">
      <img className='' src={movie.img} alt="" />
      </figure>
      <p className='has-text-centered title is-4 py-4'>{movie.title}</p>
      {!movie.watched && <button onClick={handleClick} className='button watched'>Watched</button>}
    </div>

  );
};

export default MovieTile;