import type { Meta, StoryObj } from '@storybook/react';
import WrapperListOptions from './WrapperListOptions';
import mockUsersData from '../../../mocks/data/sample-options-user.json';

const meta = {
  title: 'Organisms/WrapperListOptions',
  component: WrapperListOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
  },
} satisfies Meta<typeof WrapperListOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UserList: Story = {
  args: {
    options: mockUsersData,
  },
};
