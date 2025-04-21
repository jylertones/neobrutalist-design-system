import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
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
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    sticky: {
      control: { type: 'boolean' },
    },
    showThemeToggle: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: 'Neo-Brutalist',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Components', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    logo: 'Neo-Brutalist',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Components', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    logo: 'Neo-Brutalist',
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Components', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
};

export const WithoutThemeToggle: Story = {
  args: {
    logo: 'Neo-Brutalist',
    showThemeToggle: false,
    navItems: [
      { label: 'Home', href: '#', active: true },
      { label: 'Components', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
};