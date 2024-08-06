import type { Meta, StoryObj } from '@storybook/react';
import ListOptionsUser from './ListOptionsUser';
import mockUsersData from '../../../mocks/data/sample-options-user.json';

const meta = {
  title: 'Organisms/ListOptionsUser',
  component: ListOptionsUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    idOptionSelected: { control: 'text' },
    onSelectOption: { action: 'onSelectOption' },
  },
} satisfies Meta<typeof ListOptionsUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ManyUsers: Story = {
  args: {
    options: mockUsersData,
    idOptionSelected: '',
    onSelectOption: () => {},
  },
};

export const OneUser: Story = {
  args: {
    options: [
      {
        id: 'user-001',
        value: 'user-001',
        text: 'Victor Díaz',
      },
    ],
    idOptionSelected: '',
    onSelectOption: () => {},
  },
};

export const Empty: Story = {
  args: {
    options: [],
    idOptionSelected: '',
    onSelectOption: () => {},
  },
};
