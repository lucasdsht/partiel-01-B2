import React from "react";
import {
    ComponentStory,
    ComponentMeta
} from "@storybook/react"

import {
    Input,
    InputProps
} from "./Input"

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const Text = Template.bind({})
Text.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"text",
    labelVisible: true,
}
export const Mail = Template.bind({})
Mail.args = {
    id: "testId",
    name: "Adresse mail",
    placeholder: "Veuillez renseigner votre adresse mail",
    type:"email",
    labelVisible: true,
}
export const Phone = Template.bind({})
Phone.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"tel",
    labelVisible: true,
}
export const Password = Template.bind({})
Password.args = {
    eyeIcon: true,
    id: "testId",
    name: "Mot de passe",
    placeholder: "Veuillez renseigner votre mot de passe",
    type:"password",
    labelVisible: true,
}
export const Number = Template.bind({})
Number.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"number",
    labelVisible: true,
}
export const Date = Template.bind({})
Date.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"date",
    labelVisible: true,
}
export const Checkbox = Template.bind({})
Checkbox.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"checkbox",
    labelVisible: true,
}
export const Radio = Template.bind({})
Radio.args = {
    id: "testId",
    name: "Label Name",
    placeholder: "testPlaceholder",
    type:"radio",
    labelVisible: true,
}
