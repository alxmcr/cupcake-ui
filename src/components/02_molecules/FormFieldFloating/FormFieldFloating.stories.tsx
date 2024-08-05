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
    inputType: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    readOnly: { control: 'boolean' },
    labelText: { control: 'text' },
  },
} satisfies Meta<typeof FormFieldFloating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    inputType: 'text',
    id: 'FormFieldFloating-text',
    name: 'user-name',
    readOnly: false,
    labelText: 'Elige un usuario',
  },
};
