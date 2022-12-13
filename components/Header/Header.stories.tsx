import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    Header,
    HeaderProps
} from "./Header"

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Default = Template.bind({})
Default.args = {
    loggedIn: false
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    loggedIn: true,
}