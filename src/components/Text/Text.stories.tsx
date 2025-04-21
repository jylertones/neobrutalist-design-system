import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import ThemeProvider from '../ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
      options: ['heading1', 'heading2', 'heading3', 'heading4', 'body', 'small'],
      control: { type: 'select' },
    },
    weight: {
      options: ['light', 'normal', 'medium', 'bold', 'black'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    noMargin: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    children: 'This is a heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading2',
    children: 'This is a heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'heading3',
    children: 'This is a heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'heading4',
    children: 'This is a heading 4',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text. The quick brown fox jumps over the lazy dog.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'This is small text. The quick brown fox jumps over the lazy dog.',
  },
};

export const BoldText: Story = {
  args: {
    variant: 'body',
    weight: 'bold',
    children: 'This is bold body text.',
  },
};

export const CenteredText: Story = {
  args: {
    variant: 'body',
    align: 'center',
    children: 'This text is centered.',
  },
};