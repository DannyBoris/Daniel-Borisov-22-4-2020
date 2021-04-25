import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = createMuiTheme({
	overrides: {
		MuiTypography: {
			h1: {
				fontSize: '3rem',
			},
			h2: {
				fontSize: '3rem',
			},
			body1: {
				fontSize: '1.5rem',
				color: 'black',
			},
		},
	},
	palette: {
		background: {
			default: 'rgba(228, 241, 254, 1)',
		},
	},
	typography: {
		allVariants: {
			fontFamily: 'Quicksand',
		},
		body1: {
			fontSize: '1.5rem',
			color: 'black',
		},
	},
})

export default responsiveFontSizes(theme)
