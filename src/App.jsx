import React from 'react'
import Home from '@/components/pages/Home'
import { LocaleContextProvider } from '@/contexts/localeContext'

const App = () => {
	return (
		<LocaleContextProvider>
			<main>
				<Home />
			</main>
		</LocaleContextProvider>
	)
}

export default App
