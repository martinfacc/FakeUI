import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavItem = styled(Link)`
	background-color: white;
	padding: 10px;
	border-radius: 10px;
	text-decoration: none;

	&.active {
		background-color: #f5f7fa;
		color: var(--color-green-4);
	}

	&:hover {
		color: var(--color-green-4);
	}
`
