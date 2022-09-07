import React from 'react'
import { Element } from './styles'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import useSeed from '@/hooks/useSeed'

const ElementComponent = (props) => {
	const { id, index } = props

	const { getElement } = useSeed()

	const element = getElement(id)
	const { name, api, method } = element
	console.log({ element })

	return (
		<Element>
			<Line>
				<Word color="green">{name}</Word>
				<Word>:</Word>
				<Space />
				{/* <Word color="blue">{'"'}</Word> */}
				<Word color="red">{api}</Word>
				<Word>.</Word>
				<Word color="red">{method}</Word>
				{/* <Word color="blue">{'"'}</Word> */}
				<Word>,</Word>
			</Line>
		</Element>
	)
}

export default ElementComponent
