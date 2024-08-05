import type { Meta, StoryObj } from '@storybook/react';
import InfoUserProfile from './InfoUserProfile';

const meta = {
  title: 'Molecules/InfoUserProfile',
  component: InfoUserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof InfoUserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Victor Díaz',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    text: 'Victor Díaz',
    selected: true,
  },
};
