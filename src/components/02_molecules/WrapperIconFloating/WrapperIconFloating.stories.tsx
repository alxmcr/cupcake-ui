import type { Meta, StoryObj } from '@storybook/react';
import WrapperIconFloating from './WrapperIconFloating';

const meta = {
  title: 'Molecules/WrapperIconFloating',
  component: WrapperIconFloating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof WrapperIconFloating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
