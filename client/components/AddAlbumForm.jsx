import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { pushAlbum } from '../actions/index'

function AddAlbumForm() {

const dispatch = useDispatch()

const [form, showForm] = useState(null)
const [newAlbum, setNewAlbum] = useState({
  album: '',
  artist: '',
  year: ''
})

const handleChange = (e) => {
  setNewAlbum({
    ...newAlbum,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(pushAlbum(newAlbum))
  showForm(null)
}

const handleClick = () => {
  showForm(true)
}
  
  return(
    <div className='add-Album-Form'>
      <h2>Add an album to the list</h2>
      <button onClick={handleClick}>Click here to add</button>
      {form && <form onSubmit={handleSubmit}>
        <label htmlFor="album">Album title: </label>
        <input type="text" id="album" name="album" onChange={handleChange}/>
        <label htmlFor="artist">Artist: </label>
        <input type="text" id="artist" name="artist" onChange={handleChange}/>
        <label htmlFor="year">Year Released: </label>
        <input type="text" id="year" name="year" onChange={handleChange}/>
        <button>Add Album</button>
      </form>}
    </div>
  )
}

export default AddAlbumForm