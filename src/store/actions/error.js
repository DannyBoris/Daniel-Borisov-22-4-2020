import { SET_ERROR } from './action-types'

export const setError = error => ({
	type: SET_ERROR,
	payload: { message: error.message, variant: error.variant },
})
