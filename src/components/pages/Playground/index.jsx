import React from 'react'
import { Playground, PlaygroundHeader, PlaygroundMain } from './styles'
import Toolbar from '@/components/Toolbar'
import Dropzone from '@/components/Dropzone'
import Preview from '@/components/Dropzone/Preview'
import FlagButton from '@/components/FlagButton'

const PlaygroundPage = () => {
	return (
		<Playground>
			<PlaygroundHeader>
				<FlagButton locale="en" src={'./en.svg'} />
				<FlagButton locale="es" src={'/es.svg'} />
				<FlagButton locale="pt_BR" src={'/pt.svg'} />
			</PlaygroundHeader>
			<PlaygroundMain>
				<Toolbar />
				<Dropzone />
				<Preview />
			</PlaygroundMain>
		</Playground>
	)
}

export default PlaygroundPage
