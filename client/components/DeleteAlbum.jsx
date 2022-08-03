import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeAlbum } from '../actions'

function DeleteAlbum({ id }) {
  
  const dispatch = useDispatch()

  const [buttons, showButtons] = useState(null)

  const firstClick = () => {
    showButtons(true)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    console.log('hiigrgerg')
    dispatch(removeAlbum(id))
  }

  const handleGoBack = (e) => {
    e.preventDefault()
    showButtons(null)
  }


  return (
    <>
      <button onClick={firstClick}>Delete</button>
      <div>
        {buttons && <button onClick={handleDelete}>Confirm</button>}
        {buttons && <button onClick={handleGoBack}>Whoops! Go back</button>}
      </div>
    </>
  )
}

export default DeleteAlbum
