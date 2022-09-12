import React from 'react'
import SeedContext from '@/contexts/seedContext.jsx'
import { apis } from '@/libs/generator'
import identifier from '@/utils/identifier'

const useSeed = () => {
	const { seed, setSeed } = React.useContext(SeedContext)

	// const addElement = (fatherId, index, element) => {
	// 	const father = seed[fatherId]
	// 	const start = father.children.slice(0, index)
	// 	const end = father.children.slice(index)
	// 	element.name = identifier.next().value
	// 	setSeed((prevSeed) => ({
	// 		...prevSeed,
	// 		[fatherId]: {
	// 			...father,
	// 			children: [...start, element.id, ...end],
	// 		},
	// 		[element.id]: element,
	// 	}))
	// }

	// const getElement = (id) => {
	// 	const element = seed[id]
	// 	return element
	// }

	const getElement = (id) => {
		const element = seed.elements.find((element) => element.id === id)
		return element
	}

	// const toggleElement = (id) => {
	// 	const element = getElement(id)
	// 	const { opened } = element
	// 	setSeed((prevSeed) => ({
	// 		...prevSeed,
	// 		[id]: {
	// 			...element,
	// 			opened: !opened,
	// 		},
	// 	}))
	// }

	const updateElement = (id, element) => {
		setSeed((prevSeed) => {
			const elements = prevSeed.elements.filter((element) => element.id !== id)
			return {
				...prevSeed,
				elements: [...elements, element],
			}
		})
	}

	const toggleElement = (id) => {
		const element = getElement(id)
		updateElement(id, { ...element, opened: !element.opened })
	}

	const searchDuplicateName = (fatherId, name) => {
		const father = getElement(fatherId)
		const { children } = father
		const isDuplicated = children.some((childId) => {
			const child = getElement(childId)
			return child.name === name
		})
		return isDuplicated
	}

	const makeSeed = (containerId) => {
		const element = getElement(containerId)
		if (element.type === 'container') {
			const self = {}
			const { children } = element
			children.forEach((childId) => {
				const child = getElement(childId)
				const { type, name } = child
				if (type === 'container') {
					self[name] = makeSeed(childId)
				} else {
					const { api, method } = child
					self[name] = apis[api][method]()
				}
			})
			return self
		}
	}

	const makeAllSeed = (seeds = 1) => {
		const seedArray = []
		for (let i = 0; i < seeds; i++) {
			seedArray.push(makeSeed('root'))
		}
		return seedArray
	}

	// const addElement = (fatherId, index, element) => {
	// 	element.id = element.name = identifier.next().value
	// 	const father = getElement(fatherId)
	// 	const start = father.children.slice(0, index)
	// 	const end = father.children.slice(index)
	// 	updateElement(fatherId, {
	// 		...father,
	// 		children: [...start, element.id, ...end],
	// 	})
	// 	if (element.type === 'container') {
	// 		element.children = []
	// 		element.opened = true
	// 	}
	// 	setSeed((prevSeed) => ({
	// 		...prevSeed,
	// 		lastId: fatherId,
	// 		elements: [...prevSeed.elements, element],
	// 	}))
	// }

	const addElement = (fatherId, index, element) => {
		element.id = element.name = identifier.next().value
		element.fatherId = fatherId
		if (element.type === 'container') {
			element.children = []
			element.opened = true
		}
		const father = getElement(fatherId)
		const start = father.children.slice(0, index)
		const end = father.children.slice(index)
		const updatedFather = {
			...father,
			children: [...start, element.id, ...end],
		}
		setSeed((prevSeed) => {
			const elements = prevSeed.elements.filter(
				(element) => element.id !== fatherId
			)
			return {
				...prevSeed,
				lastId: fatherId,
				elements: [...elements, updatedFather, element],
			}
		})
	}

	const deleteElementRecursively = (id) => {
		const element = getElement(id)
		const { children } = element
		if (children) {
			children.forEach((childId) => deleteElementRecursively(childId))
		}
		setSeed((prevSeed) => {
			const elements = prevSeed.elements.filter((element) => element.id !== id)
			return {
				...prevSeed,
				elements,
			}
		})
	}

	const deleteElement = (id, deleteChildren = false) => {
		const element = getElement(id)
		const { fatherId } = element
		const father = getElement(fatherId)
		const fatherChildren = father.children.filter((childId) => childId !== id)
		const updatedFather = { ...father, children: fatherChildren }
		const indexOfElement = father.children.indexOf(id)
		if (deleteChildren) {
			deleteElementRecursively(id)
		} else if (element.type === 'container') {
			const start = fatherChildren.slice(0, indexOfElement)
			const end = fatherChildren.slice(indexOfElement)
			updatedFather.children = [...start, ...element.children, ...end]
		}
		setSeed((prevSeed) => {
			const elements = prevSeed.elements.filter(
				(element) => element.id !== fatherId
			)
			return {
				...prevSeed,
				lastId: fatherId,
				elements: [...elements, updatedFather],
			}
		})
	}

	return {
		seed,
		setSeed,
		getElement,
		addElement,
		updateElement,
		deleteElement,
		toggleElement,
		makeAllSeed,
		searchDuplicateName,
	}
}

export default useSeed
