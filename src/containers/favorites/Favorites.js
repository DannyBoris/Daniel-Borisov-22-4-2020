import React from 'react'
import { useSelector } from 'react-redux'
import ListTimelines from '../homepage/components/ListTimelines'

const Favorites = () => {
	const {
		favorites,
		currentWeather: { measure },
	} = useSelector(state => state)

	return <ListTimelines type="favorites" measure={measure} items={favorites} />
}

export default Favorites
