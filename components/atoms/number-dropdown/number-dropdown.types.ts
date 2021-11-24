import { UpdateAdditionalInput, AdditionalInput } from '@latitude55/components';

export type NumberDropdownProperties = AdditionalInput & {
  ariaLabel: string;
  onChange: (data: UpdateAdditionalInput) => void;
};
