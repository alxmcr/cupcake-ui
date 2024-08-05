import type { Meta, StoryObj } from '@storybook/react';
import OptionUser from './OptionUser';

const meta = {
  title: 'Atoms/OptionUser',
  component: OptionUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
    text: { control: 'text' },
  },
} satisfies Meta<typeof OptionUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlFor: 'OptionUser-user-combobox',
    text: 'Elige un usuario',
  },
};
