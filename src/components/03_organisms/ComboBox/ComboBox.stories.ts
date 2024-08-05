import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from './ComboBox';
import mockUsersData from '../../../mocks/data/sample-options-user.json';
import { LoadingStates } from '../../../types/enumTypes';

const meta = {
  title: 'Organisms/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    statusLoadingOptions: { control: 'text' },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UserListSuccess: Story = {
  args: {
    options: mockUsersData,
    statusLoadingOptions: LoadingStates.SUCCESS,
  },
};

export const UserListPending: Story = {
  args: {
    options: mockUsersData,
    statusLoadingOptions: LoadingStates.PENDING,
  },
};
