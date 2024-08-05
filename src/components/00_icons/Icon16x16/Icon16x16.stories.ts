import type { Meta, StoryObj } from '@storybook/react';
import Icon16x16 from './Icon16x16';

const meta = {
  title: 'Icons/16x16',
  component: Icon16x16,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: 'text' },
  },
} satisfies Meta<typeof Icon16x16>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Checkmark: Story = {
  args: {
    iconName: 'icon-checkmark',
  },
};

export const Profile: Story = {
  args: {
    iconName: 'icon-profile',
  },
};
