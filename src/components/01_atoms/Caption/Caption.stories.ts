import type { Meta, StoryObj } from '@storybook/react';
import Caption from './Caption';

const meta = {
  title: 'Atoms/Caption',
  component: Caption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Solo podrás elegir a Victor para continuar.',
  },
};
