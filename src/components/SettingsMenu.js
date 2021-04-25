import { makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import Switch from 'react-switch'
import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
const useStyles = makeStyles(theme => ({
	root: {
		'& ul': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			'& > li': {
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
			},
		},
	},
}))

const SettingsMenu = ({ open, setOpen, handleMeasureChange, toggleTheme, measure, theme }) => {
	const classes = useStyles()
	return (
		<Menu
			className={classes.root}
			anchorEl={open}
			onClose={() => setOpen(null)}
			open={Boolean(open)}
		>
			<MenuItem>
				<Typography>Temperature:</Typography>
				<Switch
					offColor="#f00"
					onColor="#00f"
					onChange={handleMeasureChange}
					checked={measure}
					checkedIcon={<div style={{fontWeight:800, position:'relative', left:'10px'}}>F</div>}
					uncheckedIcon={<div style={{fontWeight:800}}>C</div>}
				/>
			</MenuItem>
			<MenuItem>
				<Typography>Theme:</Typography>
				<DarkModeToggle checked={theme === 'dark'} onChange={toggleTheme} size={60} />
			</MenuItem>
		</Menu>
	)
}

export default SettingsMenu
