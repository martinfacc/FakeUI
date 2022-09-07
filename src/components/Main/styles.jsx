import styled from 'styled-components'

export const Main = styled.main`
	height: calc(calc(100vh - 80px) - 50px); // - 80px for header height and - 50px for footer height
	background-color: #f6f7f6;
	overflow-y: scroll;
	padding: 20px;

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

export const Container = styled.div`
	background-color: var(--color-blue-4);
	padding: 20px;
	background-color: white;
	border-radius: 10px;
	height: max-content;
`
