import axios from 'axios'

const WEATHER_BASE_URL = 'https://dataservice.accuweather.com'
export const CURRENT_CONDITION_API = `${WEATHER_BASE_URL}/currentconditions/v1`
export const AUTOCOMPLETE_API = `${WEATHER_BASE_URL}/locations/v1/cities/autocomplete`
export const FORECAST_API = `${WEATHER_BASE_URL}/forecasts/v1/daily/5day`
export const LOCATION_API = `${WEATHER_BASE_URL}/locations/v1/cities/geoposition/search?toplevel=true`

const axiosInstance = axios.create({
	params: {
		apikey: process.env.REACT_APP_WEATHER_API_KEY,
	},
})

/**[Api call handler]
 * @param {string} method HTTP METHOD: GET, POST, PUT, DELETE
 * @param {string} path URL to resource
 * @param {Object} data Data sent to resource
 * @returns {Promise}  so we can chain then/catch or asymc await
 */

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		return axiosInstance[method](path, data)
			.then(res => resolve(res.data))
			.catch(err => {
				reject(
					err?.response?.data?.message ||
						err?.response?.data?.Message ||
						'Something went wrong. Please try again later'
				)
			})
	})
}
