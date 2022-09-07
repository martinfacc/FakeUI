import React from 'react'
import useLocale from '@/hooks/useLocale'

const SeedContext = React.createContext({})

export const SeedContextProvider = (props) => {
	const { children } = props

	const { locale } = useLocale()

	const [seed, setSeed] = React.useState({
		root: {
			id: 'root',
			name: 'root',
			type: 'container',
			opened: true,
			children: [],
		},
	})

	const values = React.useMemo(() => ({ seed, setSeed }), [seed, locale])

	return <SeedContext.Provider value={values}>{children}</SeedContext.Provider>
}

export default SeedContext
