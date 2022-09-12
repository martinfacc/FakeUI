import React from 'react'
import { Code, Display, CodeArea } from './styles'
import Editor from "@monaco-editor/react";

const createHTML = ({ css, html, js }) => {
	return `
		<html>
			<head>
				<style>${css}</style>
			</head>
			<body>${html}</body>
			<script>${js}</script>
		</html>
	`
}

const CodePage = () => {
	const displayRef = React.useRef(null)
	const [html, setHtml] = React.useState('')
	const [css, setCss] = React.useState('')
	const [js, setJs] = React.useState('')

	React.useEffect(() => {
		if (displayRef.current) {
			displayRef.current.srcdoc = createHTML({ html, css, js })
		}
	}, [html, css, js])

	const handleChangeHtml = (e) => {
		setHtml(e.target.value)
	}

	const handleChangeCss = (e) => {
		setCss(e.target.value)
	}

	const handleChangeJs = (e) => {
		setJs(e.target.value)
	}

	return (
		<Code>
			<CodeArea onChange={handleChangeHtml}></CodeArea>
			<CodeArea onChange={handleChangeCss}></CodeArea>
			<CodeArea onChange={handleChangeJs}></CodeArea>
			<Display ref={displayRef} />
			<Editor
     height="40vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
		</Code>
	)
}

export default CodePage
