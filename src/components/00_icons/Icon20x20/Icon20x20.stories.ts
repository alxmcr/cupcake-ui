import type { Meta, StoryObj } from '@storybook/react';
import Icon20x20 from './Icon20x20';

const meta = {
  title: 'Icons/20x20',
  component: Icon20x20,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: 'text' },
  },
} satisfies Meta<typeof Icon20x20>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ArrowDown: Story = {
  args: {
    iconName: 'icon-arrow-down',
  },
};

export const ArrowUp: Story = {
  args: {
    iconName: 'icon-arrow-up',
  },
};
