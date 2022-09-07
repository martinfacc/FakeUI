import React from 'react'
import NavItem from './index'

export default {
	title: 'NavItem',
	component: NavItem,
	argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <NavItem {...args} />

export const Default = Template.bind({})
Default.args = {
	to: '/',
	children: 'Home',
}
