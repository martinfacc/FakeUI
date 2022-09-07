import React from 'react'
import { Line } from './styles'

const LineComponent = ({ color, children }) => {
	return <Line className={color}>{children}</Line>
}

export default LineComponent
