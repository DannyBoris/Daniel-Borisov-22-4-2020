export const getWeatherIcon = id => {
	switch (id) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return { icon: 'CLEAR_DAY', color: 'rgba( 252, 212, 64)' }
		case 6:
			return { icon: 'PARTLY_CLOUDY_DAY', color: '#6E6E6C' }

		case 7:
		case 8:
			return { icon: 'CLOUDY', color: '#6E6E6C' }
		case 11:
			return { icon: 'FOG', color: '#6E6E6C' }
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
			return { icon: 'RAIN', color: '#81a0ae' }
		case 25:
		case 26:
		case 29:
			return { icon: 'SLEET', color: ' #00008B' }
		case 19:
		case 22:
			return { icon: 'SNOW', color: ' #000' }
		case 20:
		case 21:
		case 23:
		case 32:
			return { icon: 'WIND', color: ' #0000CD' }
		case 33:
		case 34:
			return { icon: 'CLEAR_NIGHT', color: ' #D3D3D3' }

		default:
			return { icon: 'PARTLY_CLOUDY_NIGHT', color: ' #D3D3D3' }
	}
}



export const getFlagIcon = id => `https://flagcdn.com/16x12/${id}.png`
export const CURRENT_WEATHER = 'CURRENT_WEATHER'
export const LOCATIONS = 'LOCATIONS'
