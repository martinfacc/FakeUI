import React from 'react'
import {
	Playground,
	PlaygroundHeader,
	PlaygroundMain,
	PlaygroundFooter,
	InputGroup,
} from './styles'
import Toolbar from '@/components/Toolbar'
import Dropzone from '@/components/Dropzone'
import Preview from '@/components/Dropzone/Preview'
import FlagButton from '@/components/FlagButton'
import useSeed from '@/hooks/useSeed'
import useConfetti from '@/hooks/useConfetti'
import useToast from '@/hooks/useToast'

const PlaygroundPage = () => {
	const { makeAllSeed } = useSeed()
	const [seed, setSeed] = React.useState(1)
	const { explosion } = useConfetti()
	const { toast } = useToast()

	const handleSeed = () => {
		const result = makeAllSeed(seed)
		navigator.clipboard.writeText(JSON.stringify(result))
		// alert('Copied to clipboard')
		explosion()
		toast('success', 'Copied to clipboard!', {
			position: 'middle',
			duration: 1500
		})
		console.log({ result })
	}

	const handleChange = (event) => {
		const value = Number(event.target.value)
		setSeed(value)
	}

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
			<PlaygroundFooter>
				<InputGroup>
					<input type="number" value={seed} min={1} onChange={handleChange} />
					<button onClick={handleSeed}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
						</svg>
					</button>
				</InputGroup>
			</PlaygroundFooter>
		</Playground>
	)
}

export default PlaygroundPage
