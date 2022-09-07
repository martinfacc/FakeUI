import React from 'react'
import { Dropzone } from './styles'
import useSeed from '@/hooks/useSeed'
import Container from './Container'

const DropzoneComponent = () => {
	const { getElement } = useSeed()
	const root = getElement('root')

	return (
		<Dropzone>
			<Container {...root} />
		</Dropzone>
	)
}

export default DropzoneComponent
