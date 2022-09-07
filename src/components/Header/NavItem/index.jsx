import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { NavItem } from './styles'

const NavItemComponent = ({ children, to }) => {
	const location = useLocation()

	return (
		<NavItem
			className={classNames({ active: location.pathname === to })}
			to={to}
		>
			{children}
		</NavItem>
	)
}

NavItemComponent.propTypes = {
	children: propTypes.node.isRequired,
	to: propTypes.string.isRequired,
}

export default NavItemComponent
