import React from 'react'
import { PreviewElement } from './styles'
import Line from '@/components/Dropzone/Line'
import Word from '@/components/Dropzone/Word'
import Space from '@/components/Dropzone/Space'
import useSeed from '@/hooks/useSeed'
import { apis } from '@/libs/generator'

const PreviewElementComponent = (props) => {
	const { id, index } = props

	const { getElement } = useSeed()

	const element = getElement(id)
	const { name, api, method } = element
	const getValue = () => {
		const apiMethod = apis[api][method]
		const value = apiMethod()
		console.log({ value, type: typeof value })
		return value.toString()
	}

	return (
		<PreviewElement>
			<Line>
				<Word color="green">{name}</Word>
				<Word>:</Word>
				<Space />
				<Word color="blue">"</Word>
				<Word color="red">{getValue()}</Word>
				<Word color="blue">"</Word>
				<Word>,</Word>
			</Line>
		</PreviewElement>
	)
}

export default PreviewElementComponent
