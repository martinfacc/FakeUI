import React from 'react'
import Spinner from '@/components/Spinner'
import propTypes from 'prop-types'

const SpinnerContext = React.createContext({})

export const SpinnerContextProvider = (props) => {
	const { children } = props
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<SpinnerContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
			<Spinner isOpen={isOpen} />
		</SpinnerContext.Provider>
	)
}

SpinnerContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default SpinnerContext
