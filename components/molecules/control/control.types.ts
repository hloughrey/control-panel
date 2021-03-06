import { TControl, UpdateAdditionalInput } from '@latitude55/components';

export type ControlProperties = TControl & {
  onChange: (controlName: string) => void;
  onChangeAdditionalInputChange: (data: UpdateAdditionalInput) => void;
  child?: boolean;
};

export type StyledControlProperties = {
  child: boolean;
};
