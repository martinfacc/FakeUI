import React from 'react'
import { Element } from './styles'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import useSeed from '@/hooks/useSeed'
import ButtonName from '@/components/Dropzone/ButtonName'

const ElementComponent = (props) => {
	const { id } = props

	const { getElement } = useSeed()

	const element = getElement(id)
	const { name, api, method } = element

	return (
		<Element>
			<Line>
				<ButtonName id={id}>
					<Word color="green">{name}</Word>
				</ButtonName>
				<Word>:</Word>
				<Space />
				<Word color="red">{api}</Word>
				<Word>.</Word>
				<Word color="red">{method}</Word>
				<Word>,</Word>
			</Line>
		</Element>
	)
}

export default ElementComponent
