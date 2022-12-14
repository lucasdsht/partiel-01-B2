import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    CardsLayout,
    CardsLayoutProps
} from "./CardsLayout"

export default {
    title: 'Layout/CardsLayout',
    component: CardsLayout,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof CardsLayout>

const Template: ComponentStory<typeof CardsLayout> = (args) => <CardsLayout {...args}/>

export const Default = Template.bind({})
Default.args = {
    alt: 'alt text',
    image: 'https://github.com/lucasdsht.png',
    title: 'Burger et Sandwich',
    width: 87,
    height: 67,
    data: [
            {
            "name": "krabby Patty",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/krabby-patty.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "krabby-patty",
            "categorie": "handFood"
            },
            {
            "name": "Krusty burger",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/krusty-burger.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "krusty-burger",
            "categorie": "handFood"
            },
            {
            "name": "Sandwich parfait",
            "description": "lorem ipsum dolor sit amet",
            "price": 8,
            "src": "/assets/img/products/sandwich-parfait.jpg",
            "alt": "string",
            "width": 360,
            "height": 360,
            "urlName": "sandwich-parfait",
            "categorie": "handFood"
            },
    ]
}