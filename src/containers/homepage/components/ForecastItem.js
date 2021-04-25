import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Moment from 'react-moment'
import Wi from '../../../components/Wi'
import { getWeatherIcon } from '../../../services/constants'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			flexDirection: 'row',
			padding: theme.spacing(0, 2.25),
			borderBottom: '1px solid rgba(144,144,144,.4)',
		},
		margin:theme.spacing(1),
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	tempContainer: {
		[theme.breakpoints.up('sm')]: {
			flex: 1,
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	day: {
		flex: 1,
		textAlign: 'left',
	},
}))
const ForecastItem = ({ text, date, minTemp, maxTemp, id, measure }) => {
	minTemp = !measure ? minTemp : Math.floor((minTemp - 32) * (5 / 9))
	maxTemp = !measure ? maxTemp : Math.floor((maxTemp - 32) * (5 / 9))
	const classes = useStyles()
	const { icon, color } = getWeatherIcon(id)
	return (
		<div className={classes.root}>
			<Typography className={classes.day} variant="body1">
				<Moment format="dddd">{date}</Moment>
			</Typography>
			<Wi icon={icon} size={30} color={color} />
			<div style={{ flex: 1 }} className={classes.tempContainer}>
				<Typography>{minTemp}°</Typography> <span>-</span>
				<Typography>{maxTemp}°</Typography>
			</div>
		</div>
	)
}

export default ForecastItem
