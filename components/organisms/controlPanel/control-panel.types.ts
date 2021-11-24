export type ControlPanelProperties = {
  controls: DomainControl[];
};

type DomainControl = {
  domain: string;
  groups?: string[];
  controls: TControl[];
};

export type TControl = {
  name: string;
  checked: boolean;
  additionalInput?: AdditionalInput;
  subOptions?: TControl[];
};

export type AdditionalInput = {
  min: number;
  max: number;
  value: number | undefined;
};

export type UpdateAdditionalInput = {
  name: string;
  value: number;
};

export type ControlActions =
  | { type: 'updateControls'; value: string }
  | { type: 'updateAdditionalInput'; value: UpdateAdditionalInput };
