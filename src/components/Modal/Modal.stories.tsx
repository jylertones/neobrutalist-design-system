import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button';
import Text from '../Text';
import ThemeProvider from '../ThemeProvider';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
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
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    trigger: <Button>Open Modal</Button>,
    title: 'Modal Title',
    description: 'This is a description of the modal content.',
    children: (
      <div>
        <Text variant="body">This is the content of the modal.</Text>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    trigger: <Button>Open Small Modal</Button>,
    title: 'Small Modal',
    size: 'small',
    children: (
      <div>
        <Text variant="body">This is a small modal with minimal content.</Text>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button>OK</Button>
        </div>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    trigger: <Button>Open Large Modal</Button>,
    title: 'Large Modal',
    size: 'large',
    children: (
      <div>
        <Text variant="body">
          This is a larger modal that can contain more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam euismod, nisi vel consectetur euismod, nisi nisl consectetur nisl, nec consectetur nisl nisl nec nisl.
        </Text>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </div>
    ),
  },
};

export const NoCloseButton: Story = {
  args: {
    trigger: <Button>Open Modal (No Close Button)</Button>,
    title: 'Modal Without Close Button',
    showCloseButton: false,
    children: (
      <div>
        <Text variant="body">This modal doesn't have a close button in the corner.</Text>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button>Close</Button>
        </div>
      </div>
    ),
  },
};