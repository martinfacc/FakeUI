import styled from 'styled-components'

export const Code = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`
export const Display = styled.iframe`
	background-color: var(--color-background);
	height: 450px;
	width: 600px;
	border-radius: 10px;
	padding: 30px;
`

export const CodeArea = styled.textarea`
  font-family: 'Fira Code';
	font-size: 1rem;
	color: white;
	background-color: var(--color-background);
	height: 450px;
	width: 600px;
	border-radius: 10px;
	padding: 30px;
`
