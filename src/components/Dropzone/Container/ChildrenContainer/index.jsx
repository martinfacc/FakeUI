import React from 'react'
import { ChildrenContainer } from './styles'
import Element from '@/components/dropzone/Element'
import PreviewElement from '@/components/dropzone/Preview/PreviewElement'
import Container from '@/components/dropzone/Container'
import Spacer from '@/components/dropzone/Spacer'

const ChildrenContainerComponent = (props) => {
	const { id, elements, preview } = props

	return (
		<ChildrenContainer>
			{elements.map((element, index) => {
				return element.type === 'element' ? (
					<>
						{!preview && (
							<>
								<Element
									key={'e' + element.id + preview}
									id={element.id}
									index={index}
								/>
								<Spacer
									key={'s' + element.id + preview}
									fatherId={id}
									index={index + 1}
								/>
							</>
						)}
						{preview && (
							<PreviewElement
								key={element.id + preview}
								id={element.id}
								index={index}
							/>
						)}
					</>
				) : (
					<Container
						key={'c' + element.id + preview}
						id={element.id}
						preview={preview}
					/>
				)
			})}
		</ChildrenContainer>
	)
}

export default ChildrenContainerComponent
