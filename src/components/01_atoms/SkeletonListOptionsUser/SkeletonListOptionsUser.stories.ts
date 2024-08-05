import type { Meta, StoryObj } from '@storybook/react';
import SkeletonListOptionsUser from './SkeletonListOptionsUser';

const meta = {
  title: 'Atoms/SkeletonListOptionsUser',
  component: SkeletonListOptionsUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonListOptionsUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
