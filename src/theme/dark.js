import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: '#001528',
		},
	},

	typography: {
		allVariants: {
			fontFamily: 'Quicksand',
		},
		body1: {
			color: 'white',
		},
	},
})

export default theme
