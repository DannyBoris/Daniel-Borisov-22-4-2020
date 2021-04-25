import { SET_CURRENT_WEATHER, SET_TEMP_MEASURE } from '../actions/action-types'
// eslint-disable-next-line

const DEFAULT_STATE = { current: '', forecast: '', location: '', measure: true } // true === calcious
export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_WEATHER:
			const { current, forecast, location } = action.payload
			return { ...state, current, forecast, location }
		case SET_TEMP_MEASURE:
			return {...state, measure: !state.measure}	
		default:
			return state
	}
}
