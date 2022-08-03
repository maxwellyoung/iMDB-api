export const RECEIVE_ALBUMS = 'RECIEVE_ALBUMS'
export const ADD_ALBUM = 'ADD_ALBUM'
export const DEL_ALBUM = 'DEL_ALBUM'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
import { getAlbums, addNewAlbum, deleteAlbum, updateAlbum } from '../apis/apiClient'

export function receiveAlbums(albums) {
  return {
    type: RECEIVE_ALBUMS,
    payload: albums,
  }
}

export function addAlbum(newAlbum) {
  return {
    type: ADD_ALBUM,
    payload: newAlbum,
  }
}

export function delAlbum(id) {
  return {
    type: DEL_ALBUM,
    payload: id
  }
}

export function updAlbum(id, details) {
  return {
    type: UPDATE_ALBUM,
    payload: {id, details}
  }
}

export function fetchAlbums() {
  return (dispatch) => {
    return getAlbums()
      .then((res) => {
        dispatch(receiveAlbums(res))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function pushAlbum(newAlbum) {
  return (dispatch) => {
    return addNewAlbum(newAlbum)
      .then(res => {
        dispatch(addAlbum(res))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function removeAlbum(id) {
  return (dispatch) => {
    return deleteAlbum(id)
     .then(() => {
      dispatch(delAlbum(id))
     })
     .catch((err) => {
      console.log(err.message)
    })
  }
}

export function updateAlbums(id, details) {
  return (dispatch) => {
    return updateAlbum(id, details)
      .then(() => {
        dispatch(updAlbum(id, details))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
