import type { Meta, StoryObj } from '@storybook/react';
import OptionUser from './OptionUser';

const meta = {
  title: 'Organisms/OptionUser',
  component: OptionUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    option: { control: 'object' },
    onSelectOption: { action: 'onSelectOption' },
  },
} satisfies Meta<typeof OptionUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    option: {
      id: 'user-001',
      value: 'user-001',
      text: 'Victor Díaz',
    },
    selected: false,
    onSelectOption: () => {},
  },
};

export const Selected: Story = {
  args: {
    option: {
      id: 'user-001',
      value: 'user-001',
      text: 'Victor Díaz',
    },
    selected: true,
    onSelectOption: () => {},
  },
};
