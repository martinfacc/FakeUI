import React from 'react'
import propTypes from 'prop-types'
import { Logo } from './styles'

const LogoComponent = ({ to }) => {
	return (
		<Logo to={to}>
			<img src="/logo.svg" alt="" />
		</Logo>
	)
}

LogoComponent.defaultProps = {
	to: '/',
}

LogoComponent.propTypes = {
	to: propTypes.string,
}

export default LogoComponent
