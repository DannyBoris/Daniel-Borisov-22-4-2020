import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

const Wi = ({ icon, color, size }) => {
	return <ReactAnimatedWeather icon={icon} color={color} size={size} animate={true} />
}

export default Wi
