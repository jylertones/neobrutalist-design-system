import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Text from '../Text';
import Button from '../Button';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: '300px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      options: ['default', 'elevated', 'outlined'],
      control: { type: 'select' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    padding: {
      options: ['none', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text variant="heading3">Card Title</Text>
        <Text variant="body">
          This is a card with some content. The neo-brutalist style features bold borders and shadows.
        </Text>
      </>
    ),
    variant: 'default',
  },
};

export const Elevated: Story = {
  args: {
    children: (
      <>
        <Text variant="heading3">Elevated Card</Text>
        <Text variant="body">
          This card is elevated with a larger shadow and offset.
        </Text>
      </>
    ),
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    children: (
      <>
        <Text variant="heading3">Outlined Card</Text>
        <Text variant="body">
          This card has no shadow, just an outline.
        </Text>
      </>
    ),
    variant: 'outlined',
  },
};

export const Interactive: Story = {
  args: {
    children: (
      <>
        <Text variant="heading3">Interactive Card</Text>
        <Text variant="body">
          Hover over me to see an effect. I'm interactive!
        </Text>
      </>
    ),
    interactive: true,
  },
};

export const WithAction: Story = {
  args: {
    children: (
      <>
        <Text variant="heading3">Card with Action</Text>
        <Text variant="body" style={{ marginBottom: '16px' }}>
          This card has a button action below.
        </Text>
        <Button>Click Me</Button>
      </>
    ),
  },
};