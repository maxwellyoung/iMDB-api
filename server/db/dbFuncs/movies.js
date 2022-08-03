const conn = require('../connection')

function getAllMovies(db = conn) {
	return db('movies').select()
}

function insertMovie(newMovie, db = conn) {
	return db('movies').insert(newMovie)
}

function getMovieById(id, db = conn) {
	return db('movies').select().where('id', id).first()
}

function updateMovie(id, details, db = conn) {
	return db('movies').where('id', id).update(details)
}

module.exports = {
	getAllMovies,
	insertMovie,
	getMovieById,
	updateMovie,
}
