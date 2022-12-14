import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    PointCount,
    PointCountProps
} from "./PointCount"

export default {
    title: 'Components/PointCount',
    component: PointCount,
    parameters: {
        layout: 'centered',
    }
} as ComponentMeta<typeof PointCount>

const Template: ComponentStory<typeof PointCount> = (args) => <PointCount {...args}/>

export const Default = Template.bind({})
Default.args = {
    firstValue: 1,
    lastValue: 2,
}