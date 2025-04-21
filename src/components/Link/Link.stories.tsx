import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
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
      options: ['default', 'underlined', 'button'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    external: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
    variant: 'default',
  },
};

export const Underlined: Story = {
  args: {
    children: 'Underlined Link',
    href: '#',
    variant: 'underlined',
  },
};

export const ButtonLink: Story = {
  args: {
    children: 'Button Link',
    href: '#',
    variant: 'button',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Link',
    href: '#',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Link',
    href: '#',
    size: 'large',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    external: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Link',
    href: '#',
    disabled: true,
  },
};