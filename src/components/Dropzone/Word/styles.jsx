import styled from 'styled-components'

export const Word = styled.div`
	font-family: 'DejaVu Sans';
	font-family: 'Fira Code';
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1rem;


	color: white;
	&.red {
		color: var(--color-red-4);
	}
	&.green {
		color: var(--color-green-4);
	}
	&.purple {
		color: var(--color-purple-4);
	}
	&.blue {
		color: var(--color-blue-4);
	}
`
