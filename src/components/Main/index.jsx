import React from 'react'
import propTypes from 'prop-types'
import { Main, Container } from './styles'

const MainComponent = ({ children }) => {
	return (
		<Main>
			<Container>{children}</Container>
		</Main>
	)
}

MainComponent.propTypes = {
	children: propTypes.node.isRequired,
}

export default MainComponent
