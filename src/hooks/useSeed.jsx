import React from 'react'
import SeedContext from '@/contexts/seedContext.jsx'
import { apis } from '@/libs/generator'
import identifier from '@/utils/identifier'

const useSeed = () => {
	const { seed, setSeed } = React.useContext(SeedContext)

	const addElement = (fatherId, index, element) => {
		const father = seed[fatherId]
		const start = father.children.slice(0, index)
		const end = father.children.slice(index)
		element.name = identifier.next().value
		setSeed((prevSeed) => ({
			...prevSeed,
			[fatherId]: {
				...father,
				children: [...start, element.id, ...end],
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

	const makeSeedGenerator = (containerId) => {
		const element = getElement(containerId)
		if (element.type === 'container') {
			const self = {}
			const { children } = element
			children.forEach((childId) => {
				const child = getElement(childId)
				const { type, name } = child
				if (type === 'container') {
					self[name] = makeSeedGenerator(childId)
				} else {
					const { api, method } = child
					self[name] = apis[api][method]
				}
			})
			return self
		}
	}

	console.log({ seed: makeSeedGenerator('root') })

	return {
		seed,
		setSeed,
		addElement,
		getElement,
		toggleElement,
	}
}

export default useSeed
