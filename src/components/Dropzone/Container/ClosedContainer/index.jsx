import React from 'react'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import { Concealer } from '@/components/Dropzone/Container/styles'
import useSeed from '@/hooks/useSeed'
import ButtonName from '@/components/Dropzone/ButtonName'

const ClosedContainerComponent = (props) => {
	const { id } = props
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
				{id === 'root' ? (
					<Word color="green">{name}</Word>
				) : (
					<ButtonName id={id}>
						<Word color="green">{name}</Word>
					</ButtonName>
				)}
				<Word>:</Word>
				<Space />
				{'{...},'}
			</Line>
		</>
	)
}

export default ClosedContainerComponent
