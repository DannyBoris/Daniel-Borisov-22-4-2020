import { makeStyles } from '@material-ui/core'
import React from 'react'
import FavoriteCard from './FavoriteCard'

const useStyles = makeStyles(theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
		display: 'flex',
		flexWrap:'wrap',
		height: 'calc(100vh - 102px)', // height of navbar + margin
		justifyContent:'center',
		alignItems: 'center',
	},
}))
const FavoritesList = ({ items,measure }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			{items.map(item => (
				<FavoriteCard measure={measure} item={item} />
			))}
		</div>
	)
}

export default FavoritesList
