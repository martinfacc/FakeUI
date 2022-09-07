import styled from 'styled-components'

export const UserAvatar = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	color: white;
	font-size: 20px;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(
			80deg,
			var(--color-red-4),
			var(--color-red-1)
		);

	&.red {
		background-image: linear-gradient(
			80deg,
			var(--color-red-4),
			var(--color-red-1)
		);
	}

	&.green {
		background-image: linear-gradient(
			80deg,
			var(--color-green-4),
			var(--color-green-1)
		);
	}

	&.blue {
		background-image: linear-gradient(
			80deg,
			var(--color-blue-4),
			var(--color-blue-1)
		);
	}

	&.yellow {
		background-image: linear-gradient(
			80deg,
			var(--color-yellow-4),
			var(--color-yellow-1)
		);
	}

	&.purple {
		background-image: linear-gradient(
			80deg,
			var(--color-purple-4),
			var(--color-purple-1)
		);
	}

	&.orange {
		background-image: linear-gradient(
			80deg,
			var(--color-orange-4),
			var(--color-orange-1)
		);
	}
`
