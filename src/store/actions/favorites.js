import { ADD_FAVORITE, REMOVE_FAVORITE } from './action-types'

export const addFavorite = data => ({ type: ADD_FAVORITE, payload: data })
export const removeFavorite = key => ({ type: REMOVE_FAVORITE, payload: key })
