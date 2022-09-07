import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 60px;
		height: 60px;
	}
	h1 {
		font-weight: 400;
		color: var(--color-green-4);
	}
`
