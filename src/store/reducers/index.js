import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import favorites from './favorites'
import error from './error'
import theme from './theme'
const rootReducer = combineReducers({
	currentWeather,
	favorites,
	error,
	theme
})

export default rootReducer
