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
        borderColor: { control: "color" },
        backgroundColor: { control: "color" },
        labelColor: { control: "color" },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Accordion",
        content: `見出し風アコーディオンメニュー`,
        borderColor: "#66a6ff",
        backgroundColor: "#f4ffff",
        labelColor: "#000000",
    },
};
