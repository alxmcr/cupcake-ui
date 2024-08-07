import type { Meta, StoryObj } from '@storybook/react';
import ControlComboBox from './ControlComboBox';

const meta = {
  title: 'Organisms/ControlComboBox',
  component: ControlComboBox,
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
    captionText: { control: 'text' },
    searchText: { control: 'text' },
    onChangeSearchText: { action: 'onChangeSearchText' },
    onClickControlComboBox: { action: 'onClickControlComboBox' },
  },
} satisfies Meta<typeof ControlComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    inputType: 'text',
    id: 'ControlComboBox-text',
    name: 'user-name',
    readOnly: false,
    labelText: 'Elige un usuario',
    captionText: 'Solo podrás elegir a Victor para continuar.',
    searchText: '',
    onChangeSearchText: () => {},
    onClickControlComboBox: () => {},
  },
};
