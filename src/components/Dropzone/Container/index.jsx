import React from 'react'
import { Container } from './styles'
import useSeed from '@/hooks/useSeed'
import OpenContainer from '@/components/Dropzone/Container/OpenContainer'
import ClosedContainer from '@/components/Dropzone/Container/ClosedContainer'
const ContainerComponent = (props) => {
	const { id, preview, index } = props
	const { getElement } = useSeed()
	const { opened } = getElement(id)
	return (
		<Container>
			{opened ? (
				<OpenContainer id={id} preview={preview}/>
			) : (
				<ClosedContainer id={id}/>
			)}
		</Container>
	)
}

export default ContainerComponent
