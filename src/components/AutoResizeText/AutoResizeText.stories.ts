import type { Meta, StoryObj } from '@storybook/react';

import { AutoResizeText } from './AutoResizeText';

const meta: Meta<typeof AutoResizeText> = {
  title: 'components/AutoResizeText',
  component: AutoResizeText,
};

export default meta;

type Story = StoryObj<typeof AutoResizeText>;

const defaultStyle = {
  border: '1px solid black',
};

export const Default: Story = {
  args: {
    text: 'Hello, world!',
    style: {
      ...defaultStyle,
      color: 'red',
      fontSize: '30px',
      width: '50px',
    },
  },
};
