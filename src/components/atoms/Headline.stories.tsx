import { Meta, StoryObj } from "@storybook/react";
import { Headline } from "./Headline";

const meta = {
    title: "Headline",
    component: Headline,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        borderColor: { control: "color" },
    },
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
    args: {
        label: "Headline",
        borderColor: "#ee2560",
    },
};

export const Blue: Story = {
    args: {
        label: "Headline",
        borderColor: "#66a6ff",
    },
};
