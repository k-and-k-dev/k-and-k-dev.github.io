import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
    title: "Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
    args: {
        label: "Accordion",
        content: "見出し風のアコーディオンメニュー",
        backgroundColor: "#ff0000",
    },
};

export const Blue: Story = {
    args: {
        label: "Accordion",
        content: "見出し風のアコーディオンメニュー",
        backgroundColor: "#0000ff",
    },
};
