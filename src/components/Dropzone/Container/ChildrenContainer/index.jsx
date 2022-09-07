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
								<Element key={element.id} id={element.id} index={index} />
								<Spacer fatherId={id} />
							</>
						)}
						{preview && <PreviewElement key={element.id} id={element.id} index={index} />}
					</>
				) : (
					<Container key={element.id} id={element.id} preview={preview} index={index} />
				)
			})}
		</ChildrenContainer>
	)
}

export default ChildrenContainerComponent
