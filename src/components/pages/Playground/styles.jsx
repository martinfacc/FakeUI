import styled from 'styled-components'

export const Playground = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
`

export const PlaygroundHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`

export const PlaygroundMain = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
`

export const PlaygroundFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`

export const FormSeed = styled.form`
	display: flex;
	border: 2px solid var(--color-gray);
	border-radius: 10px;
	overflow: hidden;

	input {
		padding: 10px;
		border: none;
	}

	button {
		cursor: pointer;
		padding: 10px;
		border: none;
		line-height: 0;
		background-color: var(--color-gray);
		transition: background-color 0.2s ease-in-out;

		svg {
			fill: white;
			width: 20px;
			height: 20px;
		}

		&:hover {
			background-color: var(--color-green-4);
		}
	}
`
