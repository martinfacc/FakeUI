import React from 'react'
import propTypes from 'prop-types'
import { UserAvatar } from './styles'

const formatName = (firstName, lastName) => {
	const firstLetter = firstName?.charAt(0).toUpperCase() || 'A'
	const lastLetter = lastName?.charAt(0).toUpperCase() || 'Z'
	return firstLetter + lastLetter
}

const UserAvatarComponent = ({ user, color, ...props }) => {
	const { firstName, lastName } = user
	return (
		<UserAvatar className={color} {...props}>
			{formatName(firstName, lastName)}
		</UserAvatar>
	)
}

UserAvatarComponent.defaultProps = {
	color: 'green',
}

UserAvatarComponent.propTypes = {
	user: propTypes.shape({
		firstName: propTypes.string.isRequired,
		lastName: propTypes.string.isRequired,
	}).isRequired,
	color: propTypes.string,
}

export default UserAvatarComponent
