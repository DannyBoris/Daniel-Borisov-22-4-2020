import React, { useEffect, useState } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './homepage/Home'
import Favorites from './favorites/Favorites'
import qs from 'query-string'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentWeather, setTempMeasure, setWeather } from '../store/actions/currentWeather'
import { CURRENT_WEATHER } from '../services/constants'
import { useSnackbar } from 'notistack'
import SettingsMenu from '../components/SettingsMenu'
import { setTheme } from '../store/actions/theme'

const Main = ({ location }) => {
	const { enqueueSnackbar } = useSnackbar()
	const dispatch = useDispatch()
	const [anchor, setAnchor] = useState(null)

	const { error, favorites, currentWeather, theme } = useSelector(state => state)

	useEffect(() => {
		error.message &&
			enqueueSnackbar(error.message, {
				variant: error.variant,
				anchorOrigin: { vertical: 'top', horizontal: 'center' },
			})
		//eslint-disable-next-line
	}, [error])

	useEffect(() => {
		// on favorite card click
		const { Key } = qs.parse(location.search)
		const locationObj = favorites.find(item => item.location.Key === Key)
		if (locationObj && Key) dispatch(getCurrentWeather(locationObj.location))
		// eslint-disable-next-line
	}, [location])

	useEffect(() => {
		//init
		navigator.geolocation.getCurrentPosition(res => {
			const cachedWeather = JSON.parse(localStorage.getItem(CURRENT_WEATHER))
			if (!cachedWeather) {
				const { latitude: lat, longitude: lng } = res.coords
				dispatch(getCurrentWeather({ lat, lng }))
			} else dispatch(setWeather(cachedWeather))
		})

		//eslint-disable-next-line
	}, [])

	const handleMeasureChange = e => {
		dispatch(setTempMeasure())
	}
	const toggleTheme = () => {
		dispatch(setTheme())
	}

	const routes = [
		{ path: '/', Component: Home },
		{ path: '/favorites', Component: Favorites },
	]

	return (
		<div>
			<Navbar setOpen={setAnchor} />
			<SettingsMenu
				theme={theme}
				toggleTheme={toggleTheme}
				handleMeasureChange={handleMeasureChange}
				measure={currentWeather.measure}
				open={anchor}
				setOpen={setAnchor}
			/>
			<Switch location={location}>
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path} component={Component} />
				))}
			</Switch>
		</div>
	)
}

export default withRouter(Main)
