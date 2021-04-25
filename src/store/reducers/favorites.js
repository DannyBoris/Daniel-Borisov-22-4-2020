import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/action-types'
// eslint-disable-next-line
export default (state = [], action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return [...state, action.payload]
		case REMOVE_FAVORITE:
			const newState = state.filter(item => item.location.Key !== action.payload)
			return newState
		default:
			return state
	}
}
