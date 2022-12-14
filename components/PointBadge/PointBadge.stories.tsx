import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    PointBadge,
    PointBadgeProps
} from "./PointBadge"

export default {
    title: 'Components/PointBadge',
    component: PointBadge,
    parameters: {
        layout: 'centered',
    }
} as ComponentMeta<typeof PointBadge>

const Template: ComponentStory<typeof PointBadge> = (args) => <PointBadge {...args}/>

export const Default = Template.bind({})
Default.args = {
    src: 'https://github.com/lucasdsht.png',
    alt: 'alt text',
    width: 100,
    height: 100,
    points: 140,
}