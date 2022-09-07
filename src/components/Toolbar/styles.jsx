import styled from 'styled-components'

export const Toolbar = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--color-green-4);
	border-radius: 10px;
	padding: 30px;
	height: 450px;
	overflow-y: auto;
	background-color: var(--color-background);


	&::-webkit-scrollbar {
		width: 10px;
		background-color: #f3f6f9;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #7e8299;
		border: 1px solid #eff2f5;
	}
`
