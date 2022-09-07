import React from 'react'
import { Spacer } from './styles'
import { v4 as uuid4 } from 'uuid'
import useSeed from '@/hooks/useSeed'

const SpacerComponent = (props) => {
	const { index, fatherId } = props
	const { addElement } = useSeed()

	const spacerRef = React.useRef(null)

	const handleDragOver = (event) => {
		// console.log('onDragOver')
		event.preventDefault()
		spacerRef?.current?.classList?.add('active')
	}

	const handleDragLeave = () => {
		// console.log('onDragLeave')
		spacerRef?.current?.classList.remove('active')
	}

	const handleDrop = (event) => {
		// console.log('onDrop')
		event.preventDefault()
		const target = event.currentTarget
		handleDragLeave()

		const type = event.dataTransfer.getData('type')
		const api = event.dataTransfer.getData('api')
		const method = event.dataTransfer.getData('method')
		// const index = parseInt(target.dataset.index)
		// const fatherId = target.dataset.fatherId

		if (type === 'container') {
			const container = {
				id: uuid4(),
				name: index,
				type,
				opened: true,
				children: [],
			}
			addElement(fatherId, index, container)
		} else if (type === 'element') {
			const element = {
				id: uuid4(),
				name: index,
				type,
				api,
				method,
				father: fatherId,
			}
			addElement(fatherId, index, element)
		}
	}

	return (
		<Spacer
			ref={spacerRef}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			className="spacer"
		>
			<span />
		</Spacer>
	)
}

export default SpacerComponent
