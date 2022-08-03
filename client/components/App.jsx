import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'

import MovieList from './MovieList'
import AddForm from './AddForm'
import Nav from './Nav'

import { Routes, Route } from 'react-router-dom'
import { getAllTheMovies } from '../actions/movies'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTheMovies())
  }, [])


  return (
    <>
      <Nav />
      <header className="header is-centered  title is-1 ">
        <h1 className='has-text-centered title is-2 py-4'>Maxwell&apos;s watchlist</h1>
        <h2 className='quote has-text-centered  is-4 py-0'>iMDB API test</h2>
      </header>
      <section className="has-text-centered title is-4 py-4">
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/add' element={<AddForm />} />
        </Routes>
      </section>
      
    </>
  )
}

export default App
