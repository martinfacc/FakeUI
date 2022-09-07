function* identifierGenerator() {
	let id = 0
	while (true) {
		yield id++
	}
}

const identifier = identifierGenerator()

export default identifier
