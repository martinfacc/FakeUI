import React from 'react'
import { Toolbar } from './styles'
import DraggableElement from './DraggableElement'
import CollapsibleMenu from './CollapsibleMenu'
import { apis } from '@/libs/generator'
const ToolbarComponent = () => {
	const apisList = Object.keys(apis)

	return (
		<Toolbar>
			<CollapsibleMenu buttonText={'utils'}>
				<DraggableElement
					type="container"
					description="fake container description"
				>
					Container
				</DraggableElement>
			</CollapsibleMenu>
			{apisList.map((api, i) => (
				<CollapsibleMenu key={i} buttonText={api}>
					{Object.keys(apis[api]).map((method, j) => (
						<DraggableElement
							key={j}
							api={api}
							method={method}
							type="element"
							description="fake element description"
						>
							{method}
						</DraggableElement>
					))}
				</CollapsibleMenu>
			))}
		</Toolbar>
	)
}

export default ToolbarComponent
