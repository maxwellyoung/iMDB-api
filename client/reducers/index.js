import { combineReducers } from 'redux'
import albumsReducer from './albumsReducer'

// import stuff from './stuff'

export default combineReducers({
  albums: albumsReducer
})
