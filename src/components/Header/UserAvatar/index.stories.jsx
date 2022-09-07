import React from 'react'
import UserAvatar from './index'

export default {
	title: 'UserAvatar',
	component: UserAvatar,
	argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args) => <UserAvatar {...args} />

export const Default = Template.bind({})
Default.args = {
	user: {
		firstName: 'Daniel',
		lastName: 'Howard',
	},
}

export const Green = Template.bind({})
Green.args = {
	user: {
		firstName: 'Jane',
		lastName: 'Doe',
	},
	color: 'green',
}

export const Blue = Template.bind({})
Blue.args = {
	user: {
		firstName: 'Fred',
		lastName: 'Matter',
	},
	color: 'blue',
}

export const Yellow = Template.bind({})
Yellow.args = {
	user: {
		firstName: 'Connie',
		lastName: 'Avery',
	},
	color: 'yellow',
}

export const Red = Template.bind({})
Red.args = {
	user: {
		firstName: 'Matthew',
		lastName: 'Carter',
	},
	color: 'red',
}

export const Purple = Template.bind({})
Purple.args = {
	user: {
		firstName: 'Annie',
		lastName: 'Pruitt',
	},
	color: 'purple',
}

export const Orange = Template.bind({})
Orange.args = {
	user: {
		firstName: 'John',
		lastName: 'Smith',
	},
	color: 'orange',
}
