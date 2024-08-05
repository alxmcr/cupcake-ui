import type { Meta, StoryObj } from '@storybook/react';
import LabelFlotating from './LabelFlotating';

const meta = {
  title: 'Atoms/LabelFlotating',
  component: LabelFlotating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    floating: { control: 'boolean' },
  },
} satisfies Meta<typeof LabelFlotating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Elige un usuario',
    floating: false,
  },
};

export const Floating: Story = {
  args: {
    text: 'Elige un usuario',
    floating: true,
  },
};
