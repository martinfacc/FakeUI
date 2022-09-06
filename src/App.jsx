import React from 'react'
import Home from '@/components/pages/Home'
import { LocaleContextProvider } from '@/contexts/localeContext'
import GlobalStyles from '@/styles/GlobalStyles'

const App = () => {
	return (
		<>
			<LocaleContextProvider>
				<main>
					<Home />
				</main>
			</LocaleContextProvider>
			<GlobalStyles />
		</>
	)
}

export default App
