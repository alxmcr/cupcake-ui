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
    isLoadingOptions: { control: 'boolean' },
    idOptionSelected: { control: 'text' },
    options: { control: 'object' },
    onClickSelectOption: { action: 'onClickSelectOption' },
  },
} satisfies Meta<typeof WrapperListOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ManyUsers: Story = {
  args: {
    options: mockUsersData,
    isLoadingOptions: false,
    idOptionSelected: '',
    onClickSelectOption: () => {},
    searchText: '',
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
    isLoadingOptions: false,
    idOptionSelected: '',
    onClickSelectOption: () => {},
    searchText: '',
  },
};

export const Empty: Story = {
  args: {
    options: [],
    isLoadingOptions: false,
    idOptionSelected: '',
    onClickSelectOption: () => {},
    searchText: '',
  },
};

export const Loading: Story = {
  args: {
    options: mockUsersData,
    isLoadingOptions: true,
    idOptionSelected: '',
    onClickSelectOption: () => {},
    searchText: '',
  },
};
