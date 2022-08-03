import { combineReducers } from 'redux'

import movies from './movies'

export default combineReducers({
	movies: movies,
})

// global state refers to redux state v component state
