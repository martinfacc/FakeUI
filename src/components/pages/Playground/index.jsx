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
				<FlagButton locale="cz" src="./cz.svg" />
				<FlagButton locale="de" src="./de.svg" />
				<FlagButton locale="en_GB" src="./en_GB.svg" />
				<FlagButton locale="en_US" src={'./en_US.svg'} />
				<FlagButton locale="es_MX" src="./es_MX.svg" />
				<FlagButton locale="es" src={'/es.svg'} />
				<FlagButton locale="fi" src="./fi.svg" />
				<FlagButton locale="fr" src="./fr.svg" />
				{/* <FlagButton locale="hu" src="./hu.svg" /> */}
				<FlagButton locale="it" src="./it.svg" />
				<FlagButton locale="ja" src="./ja.svg" />
				<FlagButton locale="ko" src="./ko.svg" />
				<FlagButton locale="pl" src="./pl.svg" />
				<FlagButton locale="pt_BR" src={'/pt_BR.svg'} />
				<FlagButton locale="ru" src="./ru.svg" />
				<FlagButton locale="tr" src="./tr.svg" />
				<FlagButton locale="uk" src="./uk.svg" />
				<FlagButton locale="zh_CN" src="./zh_CN.svg" />
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
