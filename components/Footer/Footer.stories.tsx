import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    Footer,
    FooterProps
} from "./Footer"

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>

export const Default = Template.bind({})