import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Home from '@/components/pages/Home'
import Playground from '@/components/pages/Playground'
import Code from '@/components/pages/Code'
import GlobalStyles from '@/styles/GlobalStyles'
import { SpinnerContextProvider } from '@/contexts/spinnerContext'
import { SeedContextProvider } from './contexts/seedContext'
import { LocaleContextProvider } from '@/contexts/localeContext'
import '@/libs/generator.js'
const App = () => {
	return (
		<Router>
			<SpinnerContextProvider>
				<Header />
				<Main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/playground"
							element={
								<LocaleContextProvider>
									<SeedContextProvider>
										<Playground />
									</SeedContextProvider>
								</LocaleContextProvider>
							}
						/>
						<Route path="/code" element={<Code />} />
					</Routes>
				</Main>
				<Footer />
			</SpinnerContextProvider>
			<GlobalStyles />
		</Router>
	)
}

export default App
