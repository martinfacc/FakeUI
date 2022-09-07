import React from 'react'
import JSConfetti from 'js-confetti'

const useConfetti = () => {
	const explosion = () => {
		const jsConfetti = new JSConfetti()
		jsConfetti.addConfetti({
			confettiColors: [
				'#fff',
				'#04C8C8',
				'#F1416C',
				'#009EF7',
				'#FFC700',
				'#7239EA',
				'#FE621D',
			],
		})
	}

	return { explosion }
}

export default useConfetti
