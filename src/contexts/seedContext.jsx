import React from 'react'

const SeedContext = React.createContext({})

export const SeedContextProvider = (props) => {
	const { children } = props
	const [seed, setSeed] = React.useState({
		root: {
			id: 'root',
			name: 'root',
			type: 'container',
			opened: true,
			children: [],
		},
	})

	const values = React.useMemo(() => ({ seed, setSeed }), [seed, setSeed])

	return <SeedContext.Provider value={values}>{children}</SeedContext.Provider>
}

export default SeedContext
