import React, { useEffect, useState } from 'react'
import { IconButton, makeStyles, Typography } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Wi from '../../../components/Wi'
import { getWeatherIcon } from '../../../services/constants'
import { Transition } from 'react-transition-group'
import ListTimelines from './ListTimelines'
const useStyles = makeStyles(theme => ({
	weatherContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		position: 'relative',
		padding: theme.spacing(1, 0),
		flex: 1,
		overflow: 'hidden',
	},
	menuIcon: {
		display: 'flex',
		position: 'absolute',
		flexDirection: 'column',
		alignItems: 'center',
		right: 8,
		top: 8,
		'& > button': {
			padding: 0,
		},
	},
	weatherIconContainer: {},
}))

const WeatherInfo = ({ weather, handleAddFavorite, saved, handleRemoveFavorite }) => {
	const classes = useStyles()

	const transitionStyles = {
		entering: {
			opacity: 0.8,
			transform: 'scale(1.2)',
			borderRadius: '100%',
		},
		exiting: {
			opacity: 0.8,
			transform: 'scale(1.2)',
			borderRadius: '100%',
		},
		entered: { opacity: 1 },
		exited: { opacity: 1 },
	}

	const defaultStyle = {
		transition: `${300}ms ease-in-out`,
		opacity: 0,
	}

	const [currentTemp, setCurrentTemp] = useState('')

	const { current, forecast, location, measure } = weather
	const { WeatherText: text, WeatherIcon: iconId } = current
	const { LocalizedName: city, Key } = location
	const { icon, color } = getWeatherIcon(iconId)
	useEffect(() => {
		const { Metric, Imperial } = weather.current.Temperature
		const temp = measure ? Metric.Value : Imperial.Value
		setCurrentTemp(temp)
	}, [measure])

	return (
		<section className={classes.weatherContainer}>
			<Transition timeout={300} in={!saved}>
				{state => (
					<div
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}
						className={classes.menuIcon}
					>
						<IconButton
							onClick={() => (saved ? handleRemoveFavorite(Key) : handleAddFavorite(weather))}
						>
							{saved ? <BookmarkIcon htmlColor="lightblue" /> : <BookmarkBorderIcon />}
						</IconButton>
						<Typography style={{ fontSize: 12, fontWeight: 600, minWidth: 48 }}>
							{saved ? 'Unsave ' : 'Save'}
						</Typography>
					</div>
				)}
			</Transition>

			<Typography variant="h3">{city}</Typography>
			<div style={{display:'flex',alignItems:'center'}}>
				<Wi size={30} color={color} icon={icon} />
				<Typography>{text}</Typography>
			</div>

			<Typography variant="h1">{currentTemp}°</Typography>
			<ListTimelines
				measure={measure}
				type="forecasts"
				items={forecast.DailyForecasts}
				headline={forecast.Headline}
			/>
		</section>
	)
}

export default WeatherInfo
