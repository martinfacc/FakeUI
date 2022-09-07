import React from 'react'
import Swal from 'sweetalert2'

const useToast = () => {
	const toast = (type, text, settings={}) => {
		const { position, duration } = settings
		const Toast = Swal.mixin({
			toast: true,
			position: position || 'top-end',
			showConfirmButton: false,
			timer: duration || 3000,
			// timerProgressBar: true,
			// didOpen: (toast) => {
			// 	toast.addEventListener('mouseenter', Swal.stopTimer)
			// 	toast.addEventListener('mouseleave', Swal.resumeTimer)
			// },
		})

		Toast.fire({
			icon: type,
			title: text,
		})
	}

	return { toast }
}

export default useToast
