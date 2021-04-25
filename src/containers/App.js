import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import '../App.css'
import getTheme from '../theme'
import Main from './Main'

function App() {
	const { theme } = useSelector(state => state)
	return (
		<div className="App">
			<ThemeProvider theme={getTheme(theme)}>
				<CssBaseline />
				<Main />
			</ThemeProvider>
		</div>
	)
}

export default App
