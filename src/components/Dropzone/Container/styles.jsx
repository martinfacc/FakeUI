import styled from 'styled-components'

export const Container = styled.div`
`

export const Concealer = styled.button`
	cursor: pointer;
	border: none;
	background: none;

	& > * {
		rotate: 0deg;
	}

	&.opened > * {
		rotate: 90deg;
	}
`
