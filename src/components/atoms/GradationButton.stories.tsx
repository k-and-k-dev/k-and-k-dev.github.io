import { Meta, StoryObj } from "@storybook/react";
import { GradationButton } from "./GradationButton";

const meta = {
    title: "GradationButton",
    component: GradationButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        leftColor: { control: "color" },
        rightColor: { control: "color" },
    },
} satisfies Meta<typeof GradationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: "large",
        label: "GradationButton",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        label: "GradationButton",
    },
};
