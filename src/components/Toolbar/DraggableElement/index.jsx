import React from 'react'
import { DraggableElement } from './styles'
import useSeed from '@/hooks/useSeed'

const handleDragStart = (event) => {
	event.dataTransfer.setData('type', event.target.dataset.type)
	event.dataTransfer.setData('api', event.target.dataset.api)
	event.dataTransfer.setData('method', event.target.dataset.method)
	const spacers = document.querySelectorAll('.spacer')
	spacers.forEach((spacer) => spacer.classList.add('drag-start'))
}

const handleDragEnd = () => {
	const spacers = document.querySelectorAll('.spacer')
	spacers.forEach((spacer) => spacer.classList.remove('drag-start'))
}

const DraggableElementComponent = (props) => {
	const { type, api, method, description, children } = props

	const { seed, addElement } = useSeed()

	const handleDoubleClick = () => {
		addElement(seed.lastId, Infinity, { type, api, method })
	}

	return (
		<DraggableElement
			draggable
			data-type={type}
			data-api={api}
			data-method={method}
			data-description={description}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDoubleClick={handleDoubleClick}
		>
			{children}
		</DraggableElement>
	)
}

export default DraggableElementComponent
