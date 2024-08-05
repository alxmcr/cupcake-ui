import type { Meta, StoryObj } from '@storybook/react';
import OptionUser from './OptionUser';

const meta = {
  title: 'Molecules/OptionUser',
  component: OptionUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    text: { control: 'text' },
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof OptionUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 'user-victor',
    text: 'Victor Díaz',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    id: 'user-victor',
    text: 'Victor Díaz',
    selected: true,
  },
};