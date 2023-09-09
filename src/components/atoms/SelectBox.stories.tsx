import { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

const meta = {
    title: "SelectBox",
    component: SelectBox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        itemList: { control: "object" },
    },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        itemList: ["13.15", "13.16", "13.16b", "13.17"],
    },
};
