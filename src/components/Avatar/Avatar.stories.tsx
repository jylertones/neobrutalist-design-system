import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
    size: {
      options: ['small', 'medium', 'large', 'xl'],
      control: { type: 'select' },
    },
    shape: {
      options: ['square', 'rounded', 'circle'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://source.unsplash.com/random/300x300/?portrait',
    alt: 'Random portrait',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'John Doe',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    fallback: 'JS',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    fallback: 'AD',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    fallback: 'MK',
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    fallback: 'TB',
  },
};