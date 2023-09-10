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

export const Default: Story = {
    args: {
        label: "構成一覧",
        borderColor: "#ee2560",
    },
};
