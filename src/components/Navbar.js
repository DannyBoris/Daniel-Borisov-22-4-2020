import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import { Favorite, Home, Settings } from '@material-ui/icons'
import React from 'react'

import { NavLink as Link } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
	root: {
		height: 70,

		backgroundColor: 'rgba(30, 139, 195, 1)',
		marginBottom: theme.spacing(4),
	},
	links: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		'& > a': {
		height: '100%',

			margin: theme.spacing(0, 2),
			display: 'block',
			padding: '10px 0',
			'& > div': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				'& > p': {
					fontSize: 'xx-small',
				},
			},
		},
	},
}))
const Navbar = ({ open, setOpen }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Container className={classes.links}>
				<Link activeStyle={{ borderBottom: '4px solid' }} exact to="/">
					<div>
						<Home />
						Home
					</div>
				</Link>
				<Link activeStyle={{ borderBottom: '4px solid' }} exact to="/favorites">
					<div>
						<Favorite />
						Favorites
					</div>
				</Link>
				<Button onClick={e => setOpen(e.target)}>
					<div>
						<Settings />
						<Typography style={{ fontSize: 'xx-small' }}>Settings</Typography>
					</div>
				</Button>
			</Container>
		</div>
	)
}

export default Navbar
