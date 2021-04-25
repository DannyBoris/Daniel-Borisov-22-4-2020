import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { SnackbarProvider } from 'notistack'

const store = configureStore()

ReactDOM.render(
	<React.StrictMode>
		<SnackbarProvider maxSnack={1}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</SnackbarProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
