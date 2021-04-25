import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { getWeatherIcon } from '../../services/constants'
const useStyles = makeStyles(theme => ({
	root: {
		flexDirection: 'column',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		border: '1px solid black',
		height: 300,

		width: 250,
		margin: theme.spacing(1.5),
	},
}))
const FavoriteCard = ({ item, measure }) => {
	const { location, current } = item
	const { Metric, Imperial } = item.current.Temperature
	// const temp = measure ? Metric.Value : Imperial.Value

	const { Key, LocalizedName: city } = location
	const { WeatherIcon, WeatherText } = current
	const { color, icon } = getWeatherIcon(WeatherIcon)
	const classes = useStyles()
	return (
		<Container>
			<Link to={`/?Key=${Key}`} className={classes.root}>
				<Typography variant="body1">{city}</Typography>
				<Typography variant="body1">{measure ? Metric.Value : Imperial.Value}°</Typography>
				<Typography variant="body1">{WeatherText}</Typography>
			</Link>
		</Container>
	)
}

export default FavoriteCard
