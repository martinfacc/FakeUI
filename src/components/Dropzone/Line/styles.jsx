import styled from 'styled-components'

export const Line = styled.div`
	font-family: 'Fira Code';
	font-family: 'DejaVu Sans';
	width: 100%;
	color: white;
	display: flex;
	align-items: center;
	letter-spacing: 1px;

	&.red {
		color: var(--color-red-4);
	}

	&.green {
		color: var(--color-green-4);
	}
`
