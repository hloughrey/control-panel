import React from 'react';
import { text } from '@storybook/addon-knobs';
import { ignoreStory } from '@latitude55/StorybookIgnoreStory';
import { Control } from '.';
import { ControlProperties } from './control-panel.types';

export default {
  title: 'Atoms|Control',
  component: Control,
  parameters: {
    componentSubtitle: 'Contol',
  },
};

const defaultControl: ControlProperties = {
  name: 'Users',
  checked: true,
  additionalInput: undefined,
  children: undefined,
};

export const Basic = () => <Control {...defaultControl} />;
