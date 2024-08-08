import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HildaReynolds: Story = {
  args: {
    src: '/avatars/hilda-reynolds.jpg',
  },
};

export const JohanSanchez: Story = {
  args: {
    src: '/avatars/johan-sanchez.jpg',
  },
};
