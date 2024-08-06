import type { Meta, StoryObj } from '@storybook/react';
import SkeletonComboBox from './SkeletonComboBox';

const meta = {
  title: 'Atoms/SkeletonComboBox',
  component: SkeletonComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
