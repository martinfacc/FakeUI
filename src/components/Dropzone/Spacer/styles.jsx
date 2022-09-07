import styled from 'styled-components'

export const Spacer = styled.div`
	position: relative;
	width: 100%;
	height: 1px;
	background-color: transparent;

	span {
		left: 0;
		top: -5px;
		position: absolute;
		height: 10px;
		width: 100%;
		background-color: var(--color-green-4);
		background-color: transparent;
	}

	&.drag-start {
		span {
			background-color: var(--color-green-7);
			/* transparency */
			background-color: rgba(4, 200, 200, 0.5);
		}
	}
	&.active {
		span {
			background-color: var(--color-green-4);
		}
	}
`
