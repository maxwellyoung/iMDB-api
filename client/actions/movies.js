import { fetchAllMovies, postMovie, updateMovieDetails } from '../apis/movies'

//action creator

function saveMovies(arr) {
	return {
		type: 'SAVE_ALL_MOVIES',
		payload: arr,
	}
}

function saveOneMovies(newMovie) {
	return {
		type: 'SAVE_ONE_MOVIE',
		payload: newMovie,
	}
}

function updateOneMovie(movie) {
	return {
		type: 'UPDATE_ONE_MOVIE',
		payload: movie,
	}
}

//thunk

export function getAllTheMovies() {
	return (dispatch) => {
		fetchAllMovies()
			.then((moviesArr) => {
				dispatch(saveMovies(moviesArr))
			})
			.catch((err) => {
				console.log(err.message)
			})
		//then dispatch, send to redux
	}
}

//on load of app thunk gets triggered and thunk calls all the movies via api

export function addMovie(movie) {
	return (dispatch) => {
		postMovie(movie)
			.then((moviesDetails) => {
				dispatch(saveOneMovies(moviesDetails))
			})
			.catch((err) => console.log(err.message))
	}
}

export function setAsWatched(id) {
	return (dispatch) => {
		updateMovieDetails(id, { watched: true })
			.then((movie) => {
				dispatch(updateOneMovie(movie))
			})
			.catch((err) => console.log(err.message))
	}
}
