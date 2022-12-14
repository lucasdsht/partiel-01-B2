import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    Cards,
    CardsProps
} from "./Cards"

export default {
    title: 'Components/Cards',
    component: Cards,
    parameters: {
        layout: 'centered',
    }
} as ComponentMeta<typeof Cards>

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args}/>

export const Default = Template.bind({})
Default.args = {
    accent: false,
    alt: 'alt text',
    image: 'source',
    productUrlName: 'krusty-burger',
    title: 'Krusty burger',
    width: 200,
    height: 200,
}

export const Accent = Template.bind({})
Accent.args = {
    accent: true,
    alt: 'alt text',
    image: 'source',
    productUrlName: 'krusty-burger',
    width: 200,
    height: 200,

}