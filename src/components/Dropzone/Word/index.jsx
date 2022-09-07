import React from 'react'
import { Word } from './styles'

const WordComponent = ({ color, children }) => {
	return <Word className={color}>{children}</Word>
}

export default WordComponent
