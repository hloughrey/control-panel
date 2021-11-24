import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Toggle } from '.';
import { ToggleProperties } from './toggle.types';

export default {
  title: 'Atoms|Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'Toggle component',
  },
};

const toggleNoActions: Omit<ToggleProperties, "onChange"> = {
  ariaLabel: 'Toggle',
  checked: false
};

const toggleActions = actions({ onChange: 'changed' });

export const Basic = () => <Toggle {...toggleActions} {...toggleNoActions} />;

export const Checked = () => <Toggle {...toggleActions} {...toggleNoActions} checked={true} />;

