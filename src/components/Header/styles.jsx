import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	align-items: center;
  justify-content: center;
	height: 78px;
	background-color: var(--color-green-4);
  background-color: white;
	width: 100%;
	border-bottom: 2px solid #f3f6f9;
`

export const Nav = styled.nav`
  padding: 0 50px;
  width: 100%;
  max-width: var(--max-width);
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 50px;
		height: 50px;
	}
`

export const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
  gap: 20px;
`
