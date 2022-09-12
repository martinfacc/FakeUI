import React from 'react'
import {
	Playground,
	PlaygroundHeader,
	PlaygroundMain,
	PlaygroundFooter,
	FormSeed,
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
	const { explosion } = useConfetti()
	const { toast } = useToast()

	const handleSubmit = (event) => {
		event.preventDefault()
		const { seed } = event.target
		const seedValue = Number(seed?.value) || 1
		const result = makeAllSeed(seedValue)
		navigator.clipboard.writeText(JSON.stringify(result))
		// alert('Copied to clipboard')
		explosion()
		toast('success', 'Copied to clipboard!', {
			position: 'middle',
			duration: 1500,
		})
		event.target.reset()
		console.log({ result })
	}

	const handleChange = (event) => {
		const { value } = event.target
		const valueOnlyNumber = value.replace(/[^0-9]/g, '')
		const number = Number(valueOnlyNumber)
		const seedValue = !Number.isNaN(number) && number > 0 ? number : undefined
		event.target.value = seedValue || ''
	}

	return (
		<Playground>
			<PlaygroundHeader>
				<FlagButton locale="cz" src="./flags/cz.svg" />
				<FlagButton locale="de" src="./flags/de.svg" />
				<FlagButton locale="en_GB" src="./flags/en_GB.svg" />
				<FlagButton locale="en_US" src={'./flags/en_US.svg'} />
				<FlagButton locale="es_MX" src="./flags/es_MX.svg" />
				<FlagButton locale="es" src={'/flags/es.svg'} />
				<FlagButton locale="fi" src="./flags/fi.svg" />
				<FlagButton locale="fr" src="./flags/fr.svg" />
				{/* <FlagButton locale="hu" src="./flags/hu.svg" /> */}
				<FlagButton locale="it" src="./flags/it.svg" />
				<FlagButton locale="ja" src="./flags/ja.svg" />
				<FlagButton locale="ko" src="./flags/ko.svg" />
				<FlagButton locale="pl" src="./flags/pl.svg" />
				<FlagButton locale="pt_BR" src={'/flags/pt_BR.svg'} />
				<FlagButton locale="ru" src="./flags/ru.svg" />
				<FlagButton locale="tr" src="./flags/tr.svg" />
				<FlagButton locale="uk" src="./flags/uk.svg" />
				<FlagButton locale="zh_CN" src="./flags/zh_CN.svg" />
			</PlaygroundHeader>
			<PlaygroundMain>
				<Toolbar />
				<Dropzone />
				<Preview />
			</PlaygroundMain>
			<PlaygroundFooter>
				<FormSeed onSubmit={handleSubmit}>
					<input onChange={handleChange} defaultValue={1} name="seed" />
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
						</svg>
					</button>
				</FormSeed>
			</PlaygroundFooter>
		</Playground>
	)
}

export default PlaygroundPage
