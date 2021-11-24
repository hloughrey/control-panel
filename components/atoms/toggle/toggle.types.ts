import { ChangeEventHandler } from 'react';

export type ToggleProperties = {
  ariaLabel: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};
