import styled from 'styled-components'

export const CollapsibleMenu = styled.div`
	/* transition: all 0.3s; */
	white-space: nowrap;
`

export const MenuButton = styled.button`
	display: flex;
	position: relative;
	justify-content: space-between;
	padding: 10px;
	width: 100%;
	border: none;
	cursor: pointer;
	background: transparent;

	span {
		font-size: 1rem;
	}

	svg {
		width: 10px;
		transition: rotate 0.3s;
	}

	&.opened {
		svg {
			rotate: 180deg;
		}
	}
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	height: 0px;
	transition: height ease 0.3s;
`
