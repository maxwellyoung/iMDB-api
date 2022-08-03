function reducer(state = [], action) {
	//return new value of the state based on what the action declares
	//state is the current value
	switch (action.type) {
		case 'SAVE_ALL_MOVIES':
			return action.payload
		case 'SAVE_ONE_MOVIE':
			return [...state, action.payload]
		case 'UPDATE_ONE_MOVIE':
			return state.map((movie) => {
				const updatedMovie = action.payload
				if (movie.id === updatedMovie.id) {
					return updatedMovie
				}
				return movie
			})
		default:
			return state
	}
}

export default reducer
