import React from 'react'
import ShowAlbums from './ShowAlbums'
import { Routes, Route } from "react-router-dom"
import Home from './Home'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/myalbums" element={ <ShowAlbums /> }/>
      </Routes>
      </section>
    </>
  )
}

export default App
