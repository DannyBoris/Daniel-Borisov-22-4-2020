import { Container, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { apiCall, AUTOCOMPLETE_API } from '../../services/api'
import { getCurrentWeather } from '../../store/actions/currentWeather'
import { setError } from '../../store/actions/error'
import { addFavorite, removeFavorite } from '../../store/actions/favorites'
import Empty from './components/Empty'
import SearchSection from './components/SearchSection'
import WeatherInfo from './components/WeatherInfo'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: 'calc(100vh - 102px)', // height of navbar + margin
	},
}))

const Home = () => {
	const classes = useStyles()

	const dispatch = useDispatch()
	const { currentWeather, favorites } = useSelector(state => state)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		currentWeather.current && setLoading(false)
	}, [currentWeather])

	useEffect(() => {
		const currentKey = currentWeather?.location?.Key
		if (currentKey && favorites.length > 0) {
			const isSaved = favorites.some(item => item.location.Key === currentKey)
			setSaved(isSaved)
		} else setSaved(false)
	}, [favorites, currentWeather.location])

	const [query, setQuery] = useState('')
	const [saved, setSaved] = useState(false)
	const [locations, setLocations] = useState([])

	const handleAddFavorite = data => {
		dispatch(addFavorite(data))
	}

	const handleRemoveFavorite = key => {
		dispatch(removeFavorite(key))
	}

	const handleSubmit = (e, value) => {
		e.preventDefault()
		if (!value)
			apiCall('get', `${AUTOCOMPLETE_API}?q=${query}`)
				.then(res => setLocations(res))
				.catch(err => dispatch(setError({ message: err })))
		else dispatch(getCurrentWeather(value))
	}
	return (
		<Container className={classes.root}>
			<SearchSection locations={locations} handleSubmit={handleSubmit} setQuery={setQuery} />
			{loading ? (
				<div
					style={{
						flex: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Loader
						type="Oval"
						color="#00BFFF"
						height={100}
						width={100}
						timeout={13000} //3 secs
					/>
				</div>
			) : currentWeather.current ? (
				<WeatherInfo
					saved={saved}
					handleAddFavorite={handleAddFavorite}
					handleRemoveFavorite={handleRemoveFavorite}
					weather={currentWeather}
				/>
			) : (
				<Empty />
			)}
		</Container>
	)
}

export default Home
