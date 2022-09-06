import React from 'react'
import fakerEs from 'faker/locale/es'
import fakerEn from 'faker/locale/en'
import fakerPt from 'faker/locale/pt_BR'
import brFlagPath from '@/assets/br.svg'
import esFlagPath from '@/assets/es.svg'
import enFlagPath from '@/assets/en.svg'
import FlagButton from '@/components/FlagButton'
import useLocale from '@/hooks/useLocale'
import { Home, LocaleSwitcher, LocaleExample } from './styles'

const HomePage = () => {
	const { locale } = useLocale()

	return (
		<Home>
			<LocaleSwitcher>
				<FlagButton locale="en" src={enFlagPath} />
				<FlagButton locale="es" src={esFlagPath} />
				<FlagButton locale="pt" src={brFlagPath} />
			</LocaleSwitcher>
			<LocaleExample>
				{locale === 'en' && (
					<>
						<h1>{fakerEn.name.findName()}</h1>
						<h2>{fakerEn.name.jobTitle()}</h2>
						<p>{fakerEn.lorem.paragraph()}</p>
					</>
				)}
				{locale === 'es' && (
					<>
						<h1>{fakerEs.name.findName()}</h1>
						<h2>{fakerEs.name.jobTitle()}</h2>
						<p>{fakerEs.lorem.paragraph()}</p>
					</>
				)}
				{locale === 'pt' && (
					<>
						<h1>{fakerPt.name.findName()}</h1>
						<h2>{fakerPt.name.jobTitle()}</h2>
						<p>{fakerPt.lorem.paragraph()}</p>
					</>
				)}
			</LocaleExample>
		</Home>
	)
}

export default HomePage
