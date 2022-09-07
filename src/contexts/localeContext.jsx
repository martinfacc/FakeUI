import React from 'react'
import propTypes from 'prop-types'

const LocaleContext = React.createContext({})

export const LocaleContextProvider = (props) => {
	const { children } = props
	const [locale, setLocale] = React.useState('en_US')

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			{children}
		</LocaleContext.Provider>
	)
}

LocaleContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default LocaleContext
