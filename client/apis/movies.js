import request from 'superagent'

export function fetchAllMovies() {
	return request.get('/api/v1/movies').then((resp) => resp.body)
}

export function postMovie(imdbMovie) {
	const ourMovie = {
		title: imdbMovie.title,
		imdb_id: imdbMovie.id,
		img: imdbMovie.image,
	}
	return request
		.post('/api/v1/movies')
		.send(ourMovie)
		.then((resp) => resp.body)
}

export function updateMovieDetails(id, details) {
	// patch
	return request
		.patch('api/v1/movies/' + id)
		.send(details)
		.then((res) => res.body)
}
