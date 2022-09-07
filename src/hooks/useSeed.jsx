import React from 'react'
import SeedContext from '@/contexts/seedContext.jsx'

const useSeed = () => {
	const { seed, setSeed } = React.useContext(SeedContext)

	const addElement = (fatherId, index, element) => {
		console.log({
			fatherId,
			index,
			element,
		})
		const father = seed[fatherId]
		// const start = father.children.slice(0, index)
		// const end = father.children.slice(index)
		setSeed((prevSeed) => ({
			...prevSeed,
			[fatherId]: {
				...father,
				// children: [...start, element.id, ...end],
				children: [...father.children, element.id],
			},
			[element.id]: element,
		}))
	}

	const getElement = (id) => {
		const element = seed[id]
		return element
	}

	const toggleElement = (id) => {
		const element = getElement(id)
		const { opened } = element
		setSeed((prevSeed) => ({
			...prevSeed,
			[id]: {
				...element,
				opened: !opened,
			},
		}))
	}

	return {
		seed,
		setSeed,
		addElement,
		getElement,
		toggleElement,
	}
}

export default useSeed
