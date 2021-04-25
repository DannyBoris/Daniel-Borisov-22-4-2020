import { SET_ERROR } from '../actions/action-types'
// eslint-disable-next-line
export default (state = { message: '', variant: 'error' }, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, message: action.payload.message, variant: action.payload.variant }
		default:
			return state
	}
}
