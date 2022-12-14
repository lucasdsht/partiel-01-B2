import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    Menu,
    MenuProps
} from "./Menu"

export default {
    title: 'Components/Menu',
    component: Menu,
    parameters: {
        layout: 'centered'
    }
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args}/>

export const Default = Template.bind({})
Default.args = {
    loggedIn: false
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    loggedIn: true,
}