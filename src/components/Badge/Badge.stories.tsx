import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'success', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Updated',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Draft',
    variant: 'outline',
  },
};

export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'large',
  },
};