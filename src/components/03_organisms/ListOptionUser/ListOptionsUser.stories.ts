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
  },
} satisfies Meta<typeof ListOptionsUser>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UserList: Story = {
  args: {
    options: mockUsersData,
  },
};
