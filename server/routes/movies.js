const express = require('express')
const router = express.Router()

const movieDb = require('../db/dbFuncs/movies')

router.get('/', (req, res) => {
	movieDb
		.getAllMovies()
		.then((allTheMovies) => res.json(allTheMovies))
		.catch((err) => res.status(500).json({ msg: err.message }))
})

router.post('/', (req, res) => {
	const movie = req.body
	movieDb
		.insertMovie(movie)
		.then((idArr) => {
			const id = idArr[0]
			return movieDb.getMovieById(id)
		})
		.then((movieObj) => {
			res.json(movieObj)
		})
		.catch((err) => res.status(500).json({ msg: err.message }))
})

router.patch('/:id', (req, res) => {
	const id = req.params.id
	const detailsToUpdate = req.body

	movieDb
		.updateMovie(id, detailsToUpdate)
		.then(() => movieDb.getMovieById(id))
		.then((movie) => res.json(movie))
		.catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
