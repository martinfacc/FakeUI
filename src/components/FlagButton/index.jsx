import React from 'react'
import classNames from 'classnames'
import useLocale from '../../hooks/useLocale'
import { FlagButton } from './styles'

const FlagButtonComponent = (props) => {
	const { locale, src } = props

	const { locale: currentLocale, setLocale } = useLocale()

	const handleClick = () => {
		setLocale(locale)
	}

	return (
		<FlagButton
			className={classNames({
				active: locale === currentLocale,
			})}
			onClick={handleClick}
		>
			<img src={src} alt={locale} />
		</FlagButton>
	)
}

export default FlagButtonComponent
