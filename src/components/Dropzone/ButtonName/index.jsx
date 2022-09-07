import React from 'react'
import { ButtonName } from './styles'
import useSeed from '@/hooks/useSeed'
import useToast from '@/hooks/useToast'
import Swal from 'sweetalert2'

const ButtonNameComponent = (props) => {
	const { id, children } = props

	const { getElement, updateElement, searchDuplicateName } = useSeed()
	const { errorToast } = useToast()

	const element = getElement(id)

	const handleClick = async () => {
		const { value: newName, isConfirmed } = await Swal.fire({
			title: 'Edit element name',
			input: 'text',
			inputLabel: 'Name',
			inputValue: element?.name,
			showCancelButton: true,
			inputValidator: (value) => {
				if (!value) {
					return 'You need to write something!'
				}
			},
		})
		if (!isConfirmed) return
		if (newName === element.name) return
		const isDuplicated = searchDuplicateName(element.fatherId, newName)
		if (isDuplicated) {
			errorToast('Name already exists', { position: 'middle' })
		} else {
			updateElement(id, { ...element, name: newName })
		}
	}

	return <ButtonName onClick={handleClick}>{children}</ButtonName>
}

export default ButtonNameComponent
