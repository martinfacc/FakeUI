import React from 'react'
import classNames from 'classnames'
import { CollapsibleMenu, MenuButton, Menu } from './styles'

const CollapsibleMenuComponent = ({ buttonText, children }) => {
	const [opened, setOpened] = React.useState(false)
	const menuRef = React.useRef(null)

	const toggleOpen = React.useCallback(() => {
		setOpened(!opened)
	}, [opened])

	React.useEffect(() => {
		if (menuRef.current) {
			const menu = menuRef.current
			const menuHeight = menu.scrollHeight
			menu.style.height = opened ? menuHeight + 'px' : 0
		}
	}, [opened])

	return (
		<CollapsibleMenu>
			<MenuButton className={classNames({ opened })} onClick={toggleOpen}>
				<span>{buttonText}</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
				</svg>
			</MenuButton>
			<Menu ref={menuRef}>{children}</Menu>
		</CollapsibleMenu>
	)
}

export default CollapsibleMenuComponent
