import styled from 'styled-components'

export const FlagButton = styled.button`
	height: 45px;
	width: 45px;
	border: none;
	background: transparent;
	cursor: pointer;

	img {
		height: 100%;
		width: 100%;
		filter: grayscale(100%);
	}

	&:hover > img,
	&.active > img {
		filter: grayscale(0);
	}
`
