import { useContext, useCallback } from 'react'
import SpinnerContext from '@/contexts/spinnerContext.jsx'

const useSpinner = () => {
	const { isOpen, setIsOpen } = useContext(SpinnerContext)

	const open = useCallback(() => {
		setIsOpen(true)
	}, [setIsOpen])

	const close = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	const toggle = useCallback(() => {
		setIsOpen(!isOpen)
	}, [setIsOpen, isOpen])

	return { isOpen, open, close, toggle }
}

export default useSpinner
