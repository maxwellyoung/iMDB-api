import request from 'superagent'

const baseUrl = 'https://imdb-api.com/en/API/SearchMovie'
const KEY = process.env.MOVIE_KEY

export function searchForMovie(str) {
	console.log(KEY)
	return request

		.get(`${baseUrl}/${KEY}/${str}`)
		.then((resp) => resp.body.results)
}
