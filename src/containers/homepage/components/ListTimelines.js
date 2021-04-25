import { Typography } from '@material-ui/core'
import React from 'react'
import FavoritesList from '../../favorites/FavoritesList'
import ForecastList from './ForecastList'

const ListTimelines = props => {
	return props.items.length ? (
		<>{props.type === 'forecasts' ? <ForecastList {...props} /> : <FavoritesList {...props} />}</>
	) : (
		<div>
			<Typography
				style={{
					height: 'calc(100vh - 102px)', // height of navbar + margin
				}}
				variant="h2"
			>
				No {props.type} found.
				<br />
				<hr />
			</Typography>
		</div>
	)
}

export default ListTimelines
