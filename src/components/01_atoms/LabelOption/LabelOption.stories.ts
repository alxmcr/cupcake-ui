import type { Meta, StoryObj } from '@storybook/react';
import LabelOption from './LabelOption';

const meta = {
  title: 'Atoms/LabelOption',
  component: LabelOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    selectedItem: { control: 'boolean' },
  },
} satisfies Meta<typeof LabelOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Victor Díaz',
    selectedItem: false,
  },
};

export const Selected: Story = {
  args: {
    text: 'Victor Díaz',
    selectedItem: true,
  },
};
