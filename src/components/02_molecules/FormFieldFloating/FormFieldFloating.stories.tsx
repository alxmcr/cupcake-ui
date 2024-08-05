import type { Meta, StoryObj } from '@storybook/react';
import FormFieldFloating from './FormFieldFloating';

const meta = {
  title: 'Molecules/FormFieldFloating',
  component: FormFieldFloating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof FormFieldFloating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    type: 'text',
    id: 'FormFieldFloating-text',
    name: 'user-name',
    placeholder: 'Elige un usuario',
    readOnly: false,
  },
};
