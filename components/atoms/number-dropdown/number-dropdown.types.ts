import { ChangeEventHandler } from 'react';

export type NumberDropdownProperties = {
  min: number;
  max: number;
  value: number;
  ariaLabel: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
