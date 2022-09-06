import { useContext, useCallback } from 'react'
import LocaleContext from '@/contexts/localeContext.jsx'

const useLocale = () => {
	const { locale, setLocale } = useContext(LocaleContext)

	return { locale, setLocale }
}

export default useLocale
