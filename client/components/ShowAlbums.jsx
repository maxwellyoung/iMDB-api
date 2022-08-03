import React, { useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteAlbum from './DeleteAlbum'
import UpdateAlbum from './UpdateAlbum'
import AddAlbumForm from './AddAlbumForm'


function ShowAlbums() {

const dispatch = useDispatch()

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)

  return (
    <div className='show-albums redux-thunk'>
      <h1>Redux Thunk Album List</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      {albums.map(data => {
        console.log('data', data)
        return (
        <>
          <h2>Album: {data.album}</h2>
          <ul key={data.id}>
            <li>Artist: {data.artist}</li>
            <li>Year: {data.year}</li>
          </ul>
          <DeleteAlbum id={data.id}/>
          <UpdateAlbum data={data}/>
        </>
      )})}
      <AddAlbumForm />
    </div>
  )
}

export default ShowAlbums