import React from 'react'
import { ButtonName } from './styles'
import useSeed from '@/hooks/useSeed'
import useToast from '@/hooks/useToast'
import Swal from 'sweetalert2'

const ButtonNameComponent = (props) => {
	const { id, children } = props

	const { getElement, updateElement, deleteElement, searchDuplicateName } =
		useSeed()
	const { errorToast } = useToast()

	const element = getElement(id)

	const handleDelete = async () => {
		const options = {
			title: 'Are you sure?',
			text: 'You want to delete this element?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it',
			showCloseButton: true,
		}
		if (element.children?.length > 0) {
			options.showDenyButton = true
			options.denyButtonText = 'Yes and keep children'
			options.confirmButtonText = 'Yes'
		}
		const { isConfirmed, isDenied } = await Swal.fire(options)
		if (isConfirmed) deleteElement(id, true)
		else if (isDenied) deleteElement(id)
	}

	const handleClick = async () => {
		const {
			value: newName,
			isConfirmed,
			isDenied,
		} = await Swal.fire({
			title: 'Edit element name',
			input: 'text',
			inputLabel: 'Name',
			inputValue: element?.name,
			showCancelButton: true,
			showDenyButton: true,
			confirmButtonText: 'Save',
			denyButtonText: 'Delete',
			inputValidator: (value) => {
				if (!value) {
					return 'You need to write something!'
				}
			},
		})
		if (isDenied) handleDelete()
		if (isConfirmed && newName !== element.name) {
			const isDuplicated = searchDuplicateName(element.fatherId, newName)
			if (isDuplicated) {
				errorToast('Name already exists', { position: 'middle' })
			} else {
				updateElement(id, { ...element, name: newName })
			}
		}
	}
	return <ButtonName onClick={handleClick}>{children}</ButtonName>
}

export default ButtonNameComponent
