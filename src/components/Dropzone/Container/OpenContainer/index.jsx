import React from 'react'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import Spacer from '@/components/Dropzone/Spacer'
import ChildrenContainer from '@/components/Dropzone/Container/ChildrenContainer'
import { Concealer } from '@/components/Dropzone/Container/styles'
import useSeed from '@/hooks/useSeed'

const OpenContainerComponent = (props) => {
	const { id, preview } = props

	const { toggleElement, getElement } = useSeed()

	const { name, children } = getElement(id)
	const childrenElements = children.map((childId) => getElement(childId))

	const handleToggle = () => toggleElement(id)

	return (
		<>
			<Line>
				<Concealer className="opened" onClick={handleToggle}>
					<Word>{'>'}</Word>
				</Concealer>
				<Space />
				<Word color="green">{name}</Word>
				<Word>:</Word>
				<Space />
				{'{'}
			</Line>
			{!preview && <Spacer index={0} fatherId={id} />}
			<ChildrenContainer
				id={id}
				preview={preview}
				elements={childrenElements}
			/>
			<Line>{'},'}</Line>
		</>
	)
}

export default OpenContainerComponent
