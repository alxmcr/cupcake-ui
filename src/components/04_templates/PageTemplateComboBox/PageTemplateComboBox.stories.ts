import type { Meta, StoryObj } from '@storybook/react';
import PageTemplateComboBox from './PageTemplateComboBox';

const meta = {
  title: 'Templates/PageTemplateComboBox',
  component: PageTemplateComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof PageTemplateComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'ComboBox User',
  },
};
