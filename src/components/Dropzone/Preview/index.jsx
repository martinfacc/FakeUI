import React from 'react'
import { Preview } from './styles'
import Container from '@/components/Dropzone/Container'

const PreviewComponent = () => {
	return (
		<Preview>
			<Container id={'root'} preview={true} />
		</Preview>
	)
}

export default PreviewComponent
