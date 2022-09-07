import React from 'react'
import NavItem from '@/components/Header/NavItem'
import UserAvatar from '@/components/Header/UserAvatar'
import Logo from '@/components/Header/Logo'
import { Header, Nav, Ul } from './styles'

const HeaderComponent = () => {
	return (
		<Header>
			<Nav>
				<Logo />
				<Ul>
					<NavItem to="/">Home</NavItem>
					<NavItem to="/playground">Playground</NavItem>
				</Ul>
				<UserAvatar
					user={{ firstName: 'John', lastName: 'Doe' }}
					color="green"
				/>
			</Nav>
		</Header>
	)
}

export default HeaderComponent
