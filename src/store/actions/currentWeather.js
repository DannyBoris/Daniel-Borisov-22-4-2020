import { apiCall, CURRENT_CONDITION_API, FORECAST_API, LOCATION_API } from '../../services/api'
import { SET_CURRENT_WEATHER, SET_TEMP_MEASURE } from './action-types'
import { setError } from './error'

export const setWeather = data => ({
	type: SET_CURRENT_WEATHER,
	payload: data,
})

export const setTempMeasure = () => ({
	type: SET_TEMP_MEASURE,
})

export const getCurrentWeather = locationObj => async dispatch => {
	if (locationObj.lat) {
		//initial we are sending a request with lat and lng from GEO API
		const { lat, lng } = locationObj
		try {
			let locationRes = await apiCall('get', `${LOCATION_API}&q=${lat},${lng}`)
			locationObj = locationRes
		} catch (err) {
			dispatch(setError({ message: err, variant: 'error' }))
		}
	}
	const currentWeatherPromise = apiCall('get', `${CURRENT_CONDITION_API}/${locationObj.Key}`)
	const forecasePromise = apiCall('get', `${FORECAST_API}/${locationObj.Key}`)
	Promise.all([currentWeatherPromise, forecasePromise])
		.then(res => {
			let data = {
				current: res[0][0],
				forecast: res[1],
				location: { ...locationObj },
			}
			localStorage.setItem('CURRENT_WEATHER', JSON.stringify(data))
			dispatch(setWeather(data))
		})
		.catch(err => dispatch(setError({ message: err, variant: 'error' })))
}
