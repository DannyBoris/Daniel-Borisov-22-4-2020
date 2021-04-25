import { makeStyles } from '@material-ui/core'
import React from 'react'
import ForecastItem from './ForecastItem'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			justifyContent: 'space-between',
			width: '100%',
			flex: 1,
		},
		display: 'flex',
		alignItems: 'center',
	},
}))

const ForecastList = ({ items, measure }) => {
	const classes = useStyles()
	return (
		items.length && (
			<div className={classes.root}>
				{items.map((item, index) => (
					<ForecastItem
						measure={measure}
						key={index}
						minTemp={item.Temperature.Minimum.Value}
						maxTemp={item.Temperature.Maximum.Value}
						date={item.Date}
						text={item.Day.IconPhrase}
						icon={item.Day.Icon}
					/>
				))}
			</div>
		)
	)
}

export default ForecastList
