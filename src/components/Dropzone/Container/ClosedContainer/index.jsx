import React from 'react'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import { Concealer } from '@/components/Dropzone/Container/styles'
import useSeed from '@/hooks/useSeed'

const ClosedContainerComponent = (props) => {
	const { id, index } = props
	const { toggleElement, getElement } = useSeed()
	const { name } = getElement(id)

	const handleToggle = () => toggleElement(id)

	return (
		<>
			<Line>
				<Concealer onClick={handleToggle}>
					<Word>{'>'}</Word>
				</Concealer>
				<Space />
				<Word color="green">{name || index}</Word>
				<Word>:</Word>
				<Space />
				{'{...},'}
			</Line>
		</>
	)
}

export default ClosedContainerComponent
