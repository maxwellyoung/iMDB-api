import { RECEIVE_ALBUMS, ADD_ALBUM, DEL_ALBUM, UPDATE_ALBUM } from '../actions'

// const initialAlbumState = [
//   { id: 1, album: 'I AM INITIAL STATE', artist: 'Nina Nastasia', year: '2022' },
// ]

const albumsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALBUMS:
      return payload
    case ADD_ALBUM:
      return [...state, payload]
    case DEL_ALBUM:
      return state.filter((album) => album.id !== payload)
    case UPDATE_ALBUM:
      return state.map((albums) => {
        const { album, artist, year } = payload.details
        if (albums.id === payload.id) {
          albums.album = album
          albums.artist = artist
          albums.year = year
        }
        return albums
      })
    default:
      return state
  }
}

export default albumsReducer
