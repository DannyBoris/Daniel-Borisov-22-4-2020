export default (state = 'light', action) => {
	switch (action.type) {
		case 'SET_THEME':
			return state === 'light' ? 'dark' : 'light'
		default:
			return state
	}
}
