import React, { useState } from 'react';
import { searchForMovie } from '../apis/imdb'
import { addMovie } from '../actions/movies'
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion'

const AddForm = () => {
  const dispatch = useDispatch()

  const [newMovie, setNewMovie] = useState('')
  const [results, setResults] = useState([])

  const handleAdd = (movie) => {
    // console.log('ADDED', movie)
    dispatch(addMovie(movie))
  }

  const handleTyping = (evt) => {
    setNewMovie(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchForMovie(newMovie)
      .then((arr) => setResults(arr))
      .catch((err) => console.log(err.message))
  }

  
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      
      
      <form className='search-container' onSubmit={handleSubmit}>
        
          <input onChange={handleTyping} id="search-bar" placeholder="Search" name='welcome' className='search-box' value={newMovie} type='text'/>
          {/* <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /> */}
        
        <br />
        <button className="button mt-4"><span className="text">Submit</span></button>

      </form>
      <ul>
        {results.map(movie => <li key={movie.id}>  {movie.title} {movie.description}  <button className="button" onClick={() => handleAdd(movie)}>Add</button> </li>)}
      </ul>
    </motion.div>
  );
};

export default AddForm;